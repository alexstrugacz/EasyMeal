Check out our live website @ https://easymeal.me/

## Inspiration
The obesity epidemic in America is a significant public health concern affecting millions across the country. One of the main factors contributing to obesity is poor nutrition and a lack of access to healthy food options. Living in Chicago, every day, we see the impacts of unhealthy food. We believe that by making tools to inform people of what they are eating and delivering these tools in an easy-to-use website, we can make a genuine impact on the obesity epidemic.

## What it does
EasyMeal is a website that lets you instantly find healthy meals using what’s already in your kitchen. 

Input what ingredients you have in your kitchen and set a fitness goal (ex. Gain muscle, lose weight, etc), and find nutritious meal recipes!

Each recipe has an EasyMeal health score, a score backed by evidence-based research that uses key nutrients and user goals to determine how healthy a meal is for a user’s goal.

## How we built it
The first step we took towards building EasyMeal was obtaining detailed nutrition and ingredient data for online recipes. No public database or API had the level of data we needed, so we developed a custom web scraper using Python and Selenium Webdriver, a web automation tool, to scrape EatingWell, a healthy recipe provider. We scraped nutrition data (protein, carbohydrates, etc.), ingredient lists, and more for 500+ Recipes. 

With all that data, we needed a simple way to show the end user how healthy a recipe was. After reading numerous research papers, we developed an evidence-backed scoring system that ranks recipes’ health on a scale of 0-10 based on nutrition data and users’ fitness goals. For example, a recipe with high protein and low carbohydrate counts relative to others will rank high if the user aims to gain muscle mass.

We then housed all the data in a MongoDB database and developed an API using NodeJS, Express, and Heroku to enable efficient communication between the database and the frontend.

Lastly, we developed an easy-to-use frontend using React, Typescript, and Tailwind.

## Challenges we ran into
Before beginning this project, two out of the four members of our hackathon team had almost no experience working with React/Typescript. Additionally, this project was the first time we had used GitHub to work collaboratively in real time. Sometimes, we would find ourselves trying to figure out which GitHub branch we are on and emailing each other code to fix merge conflicts. Half of our team tended to work late into the night, and the other half in the early mornings. Facing these challenges, we turned each one into a learning opportunity for members. There is no member of our team who didn’t gain valuable programming & management knowledge.

## Accomplishments that we're proud of
We are proud of our team for maintaining constant communication with each other, day and night, throughout the hackathon. When changes needed to be made urgently, members would step up to the task and complete them as soon as possible. We are also proud of the learning opportunity we gave our team members - two members made their first-ever web app with React/Typescript, and all four gained real, deadline-heavy, collaborative experience using GitHub and VSCode.

## What we learned
On the technical side, we solidified (and introduced some members to) React, Typescript, and TailwindCSS. We also solidified our knowledge in web scraping with python, data manipulation, backend development, and connecting both frontend and backend. 

We also gained hands-on experience collaborating on a full project, going from ideation to MVP and presentation in 36 hours. We held a team meeting as soon as the call ended to decide on an idea, did market research, then built a mockup in a few hours. We then simultaneously built the frontend, web scraping systems, backend, and presentations, managing tasks through notion, GitHub, our discord server, and calls as issues arose. 

We also learned to push ourselves past what we previously thought possible. We had to learn unfamiliar frameworks, improvise at times, and keep going even through exhaustion and self-doubts about the scale of our project.  

In total, we learned lots from Git Init 2023, on the technical side, but a lot more beyond that, too.

## What's next for EasyMeal

In the future, we plan to add connections to other apps - allowing the user to import already set health and meal data. For example, a feature that allows members to connect their MyFitnessPal app and send us their calorie & meal information to help us personalize their EasyMeal Health Score****™****. We also hope to expand our already massive database of meals to even more - ensuring that users don’t miss out on any options. Lastly, we would like to contact certified nutritionists already fighting obesity to collaborate on even better resources.
