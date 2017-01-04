### find all .html files
`find   -iname '*.html'`

`find all .html`
### find all index.html with number of count as result
`find   -iname 'index.html' | wc -l `

### add or prefix text to each line in a file
`  awk '{print "Redirect 301  " $0;}' r1.txt > output.txt`

### combine two files line by line 
`paste file1.txt file2.txt > output.txt`

### add text or postfix to the end of each line 
`sed 's/$/\//' r1.txt >  sc.txt`
### rsync directory (sending files / folder from one location to another) 
`rsync -avz /dirname  praveen@192.168.1.114:/destination/dir/location`

### delete a branch in a git
` git push origin --delete <branch_name>`

#### example :
`git push origin --delete feature-new-server-config`

### print alternative lines
#### print odd lines
`sed -n 1~2p output1.txt > third.txt`

#### print even number lines
`sed -n 2~2p output1.txt > third.txt`

### wifi configuration through terminal
#### connect to wifi
`nmcli c up  JIO_1`

### turn wifi switch on
`nmcli radio wifi on`

### list - network configuration 
`nmcli c`

### list saved wifi connections
`nmcli d wifi list`


### enabling and disabling service in ubuntu
##### Reference :
link : http://askubuntu.com/questions/19320/how-to-enable-or-disable-services

####
`systemctl enable <service-name>`
#### check for the service  status of service on startup
`systemctl is-enabled <service-name>`

### extract URL's from text file
`cat old.xml  | grep http | grep -shoP 'http.*?[" >]' >  out-old.xml`

### extract filename with extenssion in a URL / path of file 
`sed 's@.*/@@'  test.xml`

## connect to available wifi using terminal 
`sudo nmcli dev wifi connect ICT password 002062623`