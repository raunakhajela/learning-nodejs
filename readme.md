**Learning Git**

git init => adding git to your folder

git status => your git status

git add readme.md => will add your readme.md to git

git commit -m 'testing github and ssh test repo' => commiting your changes

**Learning SSH**

ls -al ~/ .ssh => this command will check if you have any existing ssh keys

ssh-keygen -t rsa -b 4096 -C 'raunakhajela@gmail.com'

-t => adding 'rsa' security
-b => 4096 bytes
-C => your email

id_rsa => this key lives on your machine only, its private so do not share it with anyone

id_rsa.pub => this is public key which you can share

eval "$(ssh-agent -s)" => starting ssh agent and add this key so that it knows that it exists

ssh-add ~/ /c/Users/Puneet/.ssh/id_rsa => we tell ssh agent where this file lives

clip < ~/.ssh/id_rsa.pub => copies ssh code from .ssh direectory and copies to the clipboard which you can use in github

ssh -T git@github.com => checking if our gey exists in github or not
