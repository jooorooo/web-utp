WORKDIR /app/

COPY wait-for-db.sh /wait-for-db.sh
RUN chmod 755 /wait-for-db.sh
