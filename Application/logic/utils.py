import smtplib

def send_email(to_email, subject, content):
    fromaddr = "ubostonautoschool@gmail.com"
    toaddrs  = to_email
    msg = "\r\n".join(["From: ubostonautoschool@gmail.com", "To: {}".format(to_email),
                       "Subject: {}".format(subject), "", content])
    print(msg)
    username = "ubostonautoschool@gmail.com"
    password = "wanhaoqiuzhihui"
    server = smtplib.SMTP("smtp.gmail.com", port=587)
    server.ehlo()
    server.starttls()
    server.login(username, password)
    server.sendmail(fromaddr, toaddrs, msg)
    server.close()

if __name__ == "__main__":
    send_email(to_email="winstonchilw@gmail.com", subject="test_message", content="this is test content")