DROP TABLE IF EXISTS `quotes`;

CREATE TABLE `quotes` (
`id` int NOT NULL AUTO_INCREMENT,
`quote` VARCHAR(500) NOT NULL,
`author` VARCHAR(300) NOT NULL,
`likes` INT,
PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
    
INSERT INTO `quotes` (quote, author)
VALUES ('La vie cest cool', 'Benito'), ('Le front cest les meilleurs', 'Mehdi'), ('Je voulais faire une formation de coiffeur', 'David Lafleur');