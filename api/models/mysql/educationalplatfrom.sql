SHOW databases; 
USE educationplatform;
SHOW TABLES;
CREATE TABLE educator (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    bio TEXT,
    profile_picture_url VARCHAR(255),
    time_zone VARCHAR(50),
    subjects VARCHAR(255),
    grades JSON,
    classes JSON,
    rating FLOAT,
    location VARCHAR(100),
    experience_years INT,
    education VARCHAR(255),
    certifications TEXT,
    availability JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
SELECT * from educator;

CREATE TABLE parent (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
	profile_picture_url VARCHAR(255),
    time_zone VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


SHOW TABLES;
SELECT * FROM educator, parent;

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT NOT NULL,
    educator_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES parent(id) ON DELETE CASCADE,
    FOREIGN KEY (educator_id) REFERENCES educator(id) ON DELETE CASCADE
);

CREATE TABLE message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES educator(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES parent(id) ON DELETE CASCADE
);

CREATE TABLE conference (
    id INT AUTO_INCREMENT PRIMARY KEY,
    educator_id INT NOT NULL,
    parent_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    duration INT AS (TIMESTAMPDIFF(MINUTE, start_time, end_time)) STORED,
    total_sessions INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (educator_id) REFERENCES educator(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES parent(id) ON DELETE CASCADE
);

CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT NOT NULL,
    educator_id INT NOT NULL,
    student_age INT,
    start_date DATE,
    description TEXT,
    preferred_learning_style TEXT,
    parent_email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES parent(id),
    FOREIGN KEY (educator_id) REFERENCES educator(id)
);

SELECT * FROM user;
SELECT * FROM educator; 