ALTER TABLE comptes_acces MODIFY id_equipe INT NOT NULL;
ALTER TABLE comptes_acces DROP PRIMARY KEY;
ALTER TABLE comptes_acces ADD COLUMN `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT;

ALTER TABLE details_equipes MODIFY id_equipe INT NOT NULL;
ALTER TABLE details_equipes DROP PRIMARY KEY;
ALTER TABLE details_equipes ADD COLUMN `id` INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT;

