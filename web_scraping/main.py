from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import requests
import time
import random

try:
    # config firefox profile
    fp = webdriver.FirefoxProfile()
    fp.set_preference("http.response.timeout", 5)
    fp.set_preference("dom.max_scrit_run_time", 5)

    fo = webdriver.FirefoxOptions()
    # set headless so that do not display the browser
    fo.headless = True
    fo.add_argument('--disable-extensions')
    fo.add_argument('--disable-infobars')

    # create a driver
    driver = webdriver.Firefox(firefox_profile=fp, options=fo)
    
    email = []

    for i in range(1, 17):
      URL = "https://www.nyit.edu/engineering/faculty?&p="

      r = requests.get(URL, i)

      if r.status_code == 200:
        URL = URL + str(i)

        #sleep to ensure IP address is not blocked
        # time.sleep(random.randint(1, 6))

        # print(URL)
        # open a page
        driver.get(URL)

        # get the list of all "a" tag that have "href" attribute
        scholar_tbl = driver.find_elements_by_xpath("//a[@href]")

        for item in scholar_tbl:
            # get all single "a" tag
            temp = item.get_attribute("href")

            # find all "a" tag that contain "mailto:"
            if "mailto:" in temp:
                # trim "mailto" and append email to the list
                herf1, herf2 = temp.split(":")
                
                # filter duplicate email
                if herf2 not in email:
                  email.append(herf2)

        with open("output.txt", encoding='utf-8', mode='w') as output:
          for item in email:
            output.write(item + "\n")

          output.close()
      
      else:
        print("Error due to: ", r.status_code, " at ", i)

finally:
    try:
        driver.close()
    except:
        pass