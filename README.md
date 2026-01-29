# Overview

{Important!  Do not say in this section that this is college assignment.  Talk about what you are trying to accomplish as a software engineer to further your learning.}

{Provide a description the web app that you wrote. Describe how to start a test server on your computer and what website to open up to see the first page of the app.}

The app I created is to view different portfolios for different people. To start the test server you need node running on your computer then in VSCode just type node server.js. Once you see in the terminal "database listening on ${port}" you can go to a web browser and type in localhost:3000 or whatever you want the port to be. FYI if you do that then you'll also have to change the port in the server.js file.

{Describe your purpose for writing this software.}

I saw some other web sites that were for viewing and uploading different portfolios so I thought why not make my app similiar to that. Of coarse no two apps are the same so I changed a little of it.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](https://www.veed.io/view/69bfb7e8-6efe-4e82-af9f-69dbb13255ed?panel=share)

# Web Pages

{Describe each of the web pages you created and how the web app transitions between each of them.  Also describe what is dynamically created on each page.}

My web pages are pretty simple in the fact that they just show you what a back-end programmer does. When you open up localhost it shows you the homepage. Then you can alter the web address to view all of the portfolios, view a single portfolio, or view the swagger api documentation. Swagger does have some dynamics on the page because you need to click certain buttons to view the json and for the GetSingle you need to insert that certain ID to view one of the portfolios.

# Development Environment

{Describe the tools that you used to develop the software}

I used VSCode along with mongoDB.

{Describe the programming language that you used and any libraries.}

I used JS

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Web Site Name](http://partitionwizard.com)
* [Web Site Name](http://npmjs.com)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* I wasn't able to make my POST, PUT, or DELETE functions work which would've allowed you to do more in the Swagger API
* I need to figure out how to add in my HTML pages in the future.
* I could've added more json into mongoDB. That's something that I can improve upon in the future.