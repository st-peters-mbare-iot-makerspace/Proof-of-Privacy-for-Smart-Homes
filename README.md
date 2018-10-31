**

## Isoc-hyperledger

**
This is a hyper-ledger fabric application for the blockchain for proof of privacy project.

**Setting up prerequisites** 
The following are prerequisites for installing the required development tools:
-   Operating Systems: Ubuntu Linux 14.04 / 16.04 LTS (both 64-bit), or Mac OS 10.12
-   Docker Engine: Version 17.03 or higher
-   Docker-Compose: Version 1.8 or higher
-   Node: 8.9 or higher (note version 9 is not supported)
-   npm: v5.x
-   git: 2.9.x or higher
-   Python: 2.7.x
-   A code editor of your choice, we recommend VSCode.
If you running on ubuntu the following will install the prerequisites for you
```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
./prereqs-ubuntu.sh
```
For Mac OS
```
touch .bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm —-version

nvm install --lts

nvm use --lts

node --version
```

Follow the instructions here to install Docker for Mac (stable): [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

Follow the instructions here to install Docker for Mac (stable): [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

 Install the Hyperledger Composer Extension for VSCode

Launch VSCode and then press the “Extensions” button on the vertical left toolbar.

Type  `composer`  into the search bar and then press the  `Install`  button next to the  `Hyperleger Composer`extension. Once the install completes you need to press the  `Reload`  button to activate the extension.

## Setting up Development environment
1.  Essential CLI tools:
    
    ```
    
    npm install -g composer-cli@0.20
    
    
    ```
    
2.  Utility for running a REST Server on your machine to expose your business networks as RESTful APIs:
    
    
    ```
    
    npm install -g composer-rest-server@0.20
    
    
    ```
    
3.  Useful utility for generating application assets:
    
    
    ```
    
    npm install -g generator-hyperledger-composer@0.20
    
    
    ```
    
4.  Yeoman is a tool for generating applications, which utilises  `generator-hyperledger-composer`:
     
    ```
    
    npm install -g yo
    
    
    ```
    
### Install Playground

If you've already tried Composer online, you'll have seen the browser app "Playground". You can run this locally on your development machine too, giving you a UI for viewing and demonstrating your business networks.

1.  Browser app for simple editing and testing Business Networks:
    
    
    ```
    
    npm install -g composer-playground@0.20
    
    
    ```

This step gives you a local Hyperledger Fabric runtime to deploy your business networks to.

1.  In a directory of your choice (we will assume  `~/fabric-dev-servers`), get the  `.tar.gz`  file that contains the tools to install Hyperledger Fabric:
    
    
    ```
    
    mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers
    
    curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
    tar -xvf fabric-dev-servers.tar.gz
    
    
    ```
    
    A  `zip`  is also available if you prefer: just replace the  `.tar.gz`  file with  `fabric-dev-servers.zip`  and the  `tar -xvf`  command with a  `unzip`  command in the preceding snippet.
    
2.  Use the scripts you just downloaded and extracted to download a local Hyperledger Fabric v1.2 runtime:
    
    
    ```
    
    cd ~/fabric-dev-servers
    export FABRIC_VERSION=hlfv12
    ./downloadFabric.sh
    
    ```
    

The first time you start up a new runtime, you'll need to run the start script, then generate a PeerAdmin card:



```

    cd ~/fabric-dev-servers
    export FABRIC_VERSION=hlfv12
    ./startFabric.sh
    ./createPeerAdminCard.sh
    
```
## Deploying your application

Checkout your project and go to the folder of your project code
To deploy the `isoc-network` to your local Fabric, use the Composer CLI and execute this sequence of commands:

```

composer network install --archiveFile  isoc-network@0.0.1.bna  -- card PeerAdmin@hlfv1

composer network start --networkName isoc-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file isocnetworkadmin.card

composer card import --file isocnetworkadmin.card


```

To make sure your network is up you can use the following command

```

composer network ping --card admin@isoc-network

```
From here your network should be ready and you can view it from playground.
open a new terminal and run the following 

```

composer-playground

```
