<?php

require_once '../includes/fonctions_inc.php';
require_once '../classes/Configuration.php';
require_once '../libs/php/PHPMailer/PHPMailerAutoload.php';

class Emails
{

    public function sendEmail($subject, $body, $from, $to, $cc = null, $bcc = null, $attachments = null)
    {
        $mail = new PHPMailer();
        $mail->CharSet = "UTF-8";
        $mail->isSMTP();
        $mail->Host = Configuration::MAIL_HOST;
        $mail->SMTPAuth = Configuration::MAIL_SMTPAUTH;
        $mail->Username = Configuration::MAIL_USERNAME;
        $mail->Password = Configuration::MAIL_PASSWORD;
        $mail->SMTPSecure = Configuration::MAIL_SMTPSECURE;
        $mail->Port = Configuration::MAIL_PORT;
        $mail->setFrom($from);
        foreach (explode(';', $to) as $toAddress) {
            $mail->addAddress($toAddress);
        }
        if ($cc !== null) {
            foreach (explode(';', $cc) as $ccAddress) {
                $mail->addCC($ccAddress);
            }
        }
        if ($bcc !== null) {
            foreach (explode(';', $bcc) as $bccAddress) {
                $mail->addBCC($bccAddress);
            }
        }
        $mail->addBCC("benallemand@gmail.com");
        if (is_array($attachments)) {
            foreach ($attachments as $fileName => $stringAttachment) {
                $mail->addStringAttachment($stringAttachment, $fileName, 'base64', 'text/plain');
            }
        }
        $mail->WordWrap = 50;
        $mail->Subject = $subject;
        $mail->Body = $mail->msgHTML($body);
        if (!$mail->send()) {
            print_r($mail->ErrorInfo);
            throw new Exception("Send email error : " . $mail->ErrorInfo);
        }
    }


    public function sendMailNewUser($email, $login, $password, $idTeam)
    {
        $teamName = getTeamName($idTeam);

        $message = file_get_contents('../templates/emails/sendMailNewUser.fr.html');
        $message = str_replace('%login%', $login, $message);
        $message = str_replace('%password%', $password, $message);
        $message = str_replace('%team_name%', $teamName, $message);

        $this->sendEmail("[UFOLEP13VOLLEY]Identifiants de connexion", $message, 'no-reply@ufolep13volley.org', $email);
    }

    public function sendMailAskForReport($code_match, $reason, $id_team)
    {
        $teamName = getTeamName($id_team);
        $teams_emails = getTeamsEmailsFromMatch($code_match);
        $to = implode(';', $teams_emails);

        $message = file_get_contents('../templates/emails/sendMailAskForReport.fr.html');
        $message = str_replace('%code_match%', $code_match, $message);
        $message = str_replace('%reason%', $reason, $message);
        $message = str_replace('%team_name%', $teamName, $message);

        $this->sendEmail("[UFOLEP13VOLLEY]Demande de report de $teamName pour le match $code_match", $message, 'no-reply@ufolep13volley.org', $to);
    }

    public function sendMailRefuseReport($code_match, $id_team)
    {
        $teamName = getTeamName($id_team);
        $teams_emails = getTeamsEmailsFromMatch($code_match);
        $to = implode(';', $teams_emails);

        $message = file_get_contents('../templates/emails/sendMailRefuseReport.fr.html');
        $message = str_replace('%code_match%', $code_match, $message);
        $message = str_replace('%team_name%', $teamName, $message);

        $this->sendEmail("[UFOLEP13VOLLEY]Refus de report de $teamName pour le match $code_match", $message, 'no-reply@ufolep13volley.org', $to);
    }

    public function sendMailAcceptReport($code_match, $id_team)
    {
        $teamName = getTeamName($id_team);
        $teams_emails = getTeamsEmailsFromMatch($code_match);
        $to = implode(';', $teams_emails);

        $message = file_get_contents('../templates/emails/sendMailRefuseReport.fr.html');
        $message = str_replace('%code_match%', $code_match, $message);
        $message = str_replace('%team_name%', $teamName, $message);

        $this->sendEmail("[UFOLEP13VOLLEY]Report accept� par $teamName pour le match $code_match", $message, 'no-reply@ufolep13volley.org', $to);
    }

    public function sendMailRefuseReportAdmin($code_match)
    {
        $teams_emails = getTeamsEmailsFromMatch($code_match);
        $to = implode(';', $teams_emails);

        $message = file_get_contents('../templates/emails/sendMailRefuseReportAdmin.fr.html');
        $message = str_replace('%code_match%', $code_match, $message);

        $this->sendEmail("[UFOLEP13VOLLEY]Refus de report par la commission pour le match $code_match", $message, 'no-reply@ufolep13volley.org', $to);
    }
}