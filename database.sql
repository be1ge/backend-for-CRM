
create TABLE client(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255)
);

create TABLE project(
    id SERIAL PRIMARY KEY,
    serial VARCHAR(255), 
    title VARCHAR(255),
    status BOOLEAN,
    comment VARCHAR(255),
    client INTEGER,
    FOREIGN KEY (client) REFERENCES client (id)
);

create TABLE article(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    comment VARCHAR(255)
);

create TABLE bet(
    id SERIAL PRIMARY KEY,
    bet FLOAT,
    normal INTEGER,
    comment VARCHAR(255)
);

create TABLE instruction(
    id SERIAL PRIMARY KEY,
    datetime VARCHAR(255),
    serial VARCHAR(255),
    summary INTEGER,
    article INTEGER,
    project INTEGER,
    bet INTEGER,
    component1_title VARCHAR(255),
    component1_summary INTEGER,
    component2_title VARCHAR(255),
    component2_summary INTEGER,
    FOREIGN KEY (project) REFERENCES project (id),
    FOREIGN KEY (article) REFERENCES article (id),
    FOREIGN KEY (bet) REFERENCES bet (id)
);


create TABLE worker(
    id SERIAL PRIMARY KEY,
    surname VARCHAR(255),
    name VARCHAR(255),
    patron VARCHAR(255),
    bet INTEGER,
    phone INTEGER,
    day BOOLEAN,
    status BOOLEAN,
    recruitor INTEGER,
    comment VARCHAR(255),
    FOREIGN KEY (recruitor) REFERENCES client (id),
    FOREIGN KEY (bet) REFERENCES bet (id)
);

create TABLE shift(
    id SERIAL PRIMARY KEY,
    date VARCHAR(255),
    master VARCHAR(255),
    instruction INTEGER,
    statement VARCHAR(255),
    day BOOLEAN,
    done BOOLEAN,
    worker_id INTEGER,
    worker_instruction INTEGER,
    worker_bet INTEGER,
    worker_start INTEGER,
    worker_end INTEGER,
    worker_lunch BOOLEAN,
    worker_summary INTEGER,
    worker_type VARCHAR(30),
    FOREIGN KEY (worker_id) REFERENCES worker (id),
    FOREIGN KEY (worker_instruction) REFERENCES instruction (id),
    FOREIGN KEY (worker_bet) REFERENCES bet (id),
);