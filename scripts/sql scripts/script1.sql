CREATE TABLE Users (
    user_id VARCHAR(255) PRIMARY KEY, 
    username VARCHAR(50) UNIQUE NOT NULL, 
    password_hash VARCHAR(255) NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL,
    profile_picture VARCHAR(255), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Posts (
    post_id VARCHAR(255) PRIMARY KEY, 
    user_id VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    image_url VARCHAR(255), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE Clubs (
    club_id VARCHAR(255) PRIMARY KEY, 
    club_name VARCHAR(100) NOT NULL, 
    description TEXT, 
    location VARCHAR(255), 
    manager_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (manager_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE TABLE ClubMembers (
    club_id VARCHAR(255) NOT NULL, 
    user_id VARCHAR(255) NOT NULL, 
    role ENUM('member', 'admin') DEFAULT 'member',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (club_id, user_id),
    FOREIGN KEY (club_id) REFERENCES Clubs(club_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
