FROM bde2020/spark-master:3.3.0-hadoop3.3

USER root

RUN apk add --no-cache python3 py3-pip

RUN pip3 install requests
RUN pip3 install pyspark

USER $SPARK_UID
