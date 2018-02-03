create table neighborhoods (id int(11) NOT NULL AUTO_INCREMENT,name varchar(50), zipcode int, img varchar(2085), primary key (id)) ENGINE=INNODB;


CREATE TABLE locations (
  id int(11) NOT NULL AUTO_INCREMENT, name varchar(50), neighborhood_id INT, details TEXT, primary key (id), FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id)) ENGINE=INNODB;

INSERT INTO neighborhoods (id, name, zipcode, img) VALUES
(2, 'Art Museum Area', 19130, 'http://www.rentphilly.com/wp-content/uploads/2014/11/artmuseum.jpg');
