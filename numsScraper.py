from bs4 import BeautifulSoup as bs
import requests

link="https://www.trendpunjabi.com/punjabi-counting-gurmukhi/"

res=requests.get(link)
soup=bs(res.text,'lxml')
table=soup.find_all('figure')
rows=table[0].find_all('tr')
all={}
for i in range(1,101):
    ans=rows[i].find_all('td')
    #ans[0].text='One' ans[1].text='੧' ans[2].text='Ikk' ans[3].text='ਇੱਕ'
    all[i]=[ans[0].text,ans[1].text,ans[2].text,ans[3].text]
for i in all:
    # print(str(i)+" : "+str(all[i])+',')
    print(f'''
        <tr>
          <th scope="row">{i}</th>
          <td>{all[i][0]}</td>
          <td>{all[i][1]}</td>
          <td>{all[i][2]}</td>
          <td>{all[i][3]}</td>
        </tr>
    ''')

