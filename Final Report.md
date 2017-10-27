# FINAL REPORT

## Promotional Materials

### Poster
![poster](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/Project%20Poster.png)
*The project poster*

### Video
https://www.youtube.com/watch?v=kJgdRPSD5PA

### Flyer
![flyer](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/Flyer.png)
*Front and back sides of the flyer*

## Prototype
We have two prototypes for our concept. 

### Invision Prototype
The main prototype is a horizontal prototype, which covers most features of the concept. The prototype is developed by InVision. 
#### How to view the prototype:
Use the link on your mobile phone: https://invis.io/E4E1WC9XS) 
![features](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/features.png)
*The main features of the product*

### Ionic Prototype
The other prototype is a vertical prototype. It is implemented to test the “adding events” feature for organisers. The prototype is connected to the database. The source code is accessible in the Github repository: TeamBeyondBeingThere/ClubHub/

![add events feature in ionic framework](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/ionic.png)
*The ideal interface of the ionic prototype (The prototype works well on iPhone 6)*

#### How to view the prototype:
(1) Download the Ionic View app:
iOS version: 
https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931?ls=1&mt=8
Android version:
https://play.google.com/store/apps/details?id=com.ionicframework.view

(2) Use the code to view the app: 2d5ce037 

(3) Log in with username: s12341234@uq.edu.au and password: uqstudent

(4) Tap on the ADD EVENT button on the top left to add a new event.
> Note: Organisers and other users share the same interface. However, when a user logs in as an organiser, he/she is able to see an additional button on the top bar.

### Database
Link: https://console.firebase.google.com/
You can log in to the console and view Authentication and Database sections by using the username and password below. 
ACCOUNT: uqclubhub3500@gmail.com PW:deco3500
![database screenshot](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/database.png)
*A screenshot of the database*

## Summary
There are 219 clubs and societies which hold various types of events and enrich the student's campus life at UQ (University of Queensland Union, 2017). However, the power of clubs has not been fully utilised. Several main problems have been identified.
- **Non-members** are lacking information about clubs and thus find it hard to make decisions when choosing clubs.
- **Members** sometimes lose connection with the club and cannot get the latest news.
- **Organisers** of clubs put great efforts to promote events and manage the club.

UQ ClubHub is a smartphone app, which provides an integrated platform for UQ students to be aware of clubs and events and for club organisers to promote events and recruit members.

Currently, students rely too much on the market day to learn about clubs, and they can only get event information from limited clubs they have joined. The UQ ClubHub app offers another pathway for students, via which they can participate in events and decide to join a club later.
![workflow](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/workflow.png)
*The workflow of participating in a club and events*

All participants of user tests think the app is valuable for them. Though almost all clubs have their Facebook pages, participant users think the information offered by UQ ClubHub is more relevant to them and might be useful when they need it. The social diagram feature can potentially help them to know more friends.

## Design Process

### Overall Process
![design process](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/process.png)
*The overall design process*

### Examples of design decisions
![design decision of the profile screen](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/designdecision1.png)
*Design decision of the profile screen*

During the process of designing the user and club profile page, we decided to add the special session presenting the previous events that user attended or the club created before. This includes an internal rating system which allows people to make feedback to the event and club. This is mainly because based on the user test, we find students care about what kinds of events that the clubs used to hold and the quality of the events when deciding to participate a club. 

----------

![design decision of tab bar](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/designdecision2.png)
*Design decision of the tab bar*

Removing the home tab page and added people tab page. After the first round of A/B test, we found out that testers are would like to make new friends and sometimes unable to find where to add new people. Additionally, there are only limited events in the UQ each week and all events would be listed on the events page, thus setting up a home page showing the trending events would be redundant. As a result, we added the people page so that users can find out the people sharing the same interests and attended same events before much more easily.

----------

![design decision of organiser feature](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/designdecision3.png)
*Design decision of organiser's feature*

Offering an integrated platform for event publishing and attending. In the post-test interview, organizers reported that in most of the situation it would cost them a lot of efforts planning and creating an event. Meanwhile, members or non-members mentioned that they sometimes cannot receive the events information properly and it could go worse if the event requires fees to join. Thus, in our project, we not only offered the organizer a platform to created an event and also integrated with the payment functionality which offered both organizers and members better experiences.

----------

![design decision of social diagram](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/designdecision4.png)
*Design decision of the social diagram*

Conducting social diagram in different relationship zone instead of random dispersion. From user test feedback, users are sometimes confused with the diagram display style. Some people considered it may display in 3D vision, others claim that it is hard to understand the distance between different people. Thus, we modified social diagram and set different people in different zones, the relationship closer, the location more central.

### Theory
Kietzmann et al. claim a framework of seven functional blocks to explain each important part of social media, which includes identity, conversations, sharing, presence, relationships, reputation, and groups (Kietzmann et al., 2011). A social media platform focuses on several elements of the honeycomb model. For example, Facebook mostly covers relationships, presence, identity, conversations, and reputation. In our concept, we decided to focus more on presence, groups, identity, and relationship.
![social media honeycomb framework of UQ ClubHub](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%2013%20-%20Wrap-up/socialhoneycomb.png)
*The social media honeycomb framework of UQ ClubHub*


### Limitations
(1) Limited to time and development skills, only parts of the features are implemented and functionally interactive. Users have a limited access to these features and are not able to give some detailed feedback.
(2) Due to the nature of the prototype, most of the information in it is placeholders. Users cannot see real information about UQ clubs and events and thus can hardly have a sense of the app.
(3) There is a lack of prior academic research in the targeted problem domain. So most design decisions of the project are made based on the user test or user research, but not academic resources. 
(4) The app focuses more on the user’s relationship with clubs. However, their ultimate goal might be meeting new friends. How can the app enhance the relationship among users? This is the next step of our investigation.

## Individual Contributions

### Chunnan ZHENG
- As a team leader, monitor the project to make sure it is on track.
- Facilitate all group sessions, such as group discussion, brainstorming, etc. and allocate tasks.
- Conduct interviews with target users
- Sketch for the user profile screens
- Compose user test protocols.
- Wireframe design
- User interface design amendment
- Facilitate two rounds of user tests.
- Questionnaire results analysis
- Document all design process.
- Organise stand-up materials.
- Design promotional materials, including the poster and the flyer.
- Write and format the proposal and the final report.

### Yiming PENG
-	Competitive analysis and user persona.
-	Take part in the interview 
-	Collecting and analysing survey data.
-	Documentation in the A/B test.
-	Important contribution in the brainstorming session.
-	Designing the paper prototype focusing on club function.
-	Conducted part of usability prototype test with users.
-	All UI part.
-	Use heatmap to test the app.
-	Iterating prototype based on user test result.
-	Designing promotion video for final showcase.

### Tianyi ZHANG
-	Academic research for the theories of social media and the current situation of clubs in Australia.
-	Take part in the interview 
-	Collecting and analysing survey data.
-	Important contribution in the brainstorming session.
-	Designing the paper prototype focusing on club function.
-	Conducted part of usability prototype test with users.
-	Designing two versions of high fidelity prototype(Organizer and Member) by using Invision.
-	Documentation of the final usability testing session.
-	Iterating prototype based on user test result.
-	Designing promotion video for final showcase.

### Yifan LU
-	Academic research focusing on enhance and stimulate the positive connection between individual and groups.
-	Designing the questionnaire for gathering target users’ requirements  
-	Important contributor in the brainstorming session
-	Concept & adapting academic research parts in the project proposal
-	Designing the filter for the project paper prototype.
-	Documentation in the A/B test.
-	Setting up Ionic prototype basic structure, main functionalities and some part of the UI implementation. 
-	Setting up firebase database and connection it with the ionic prototype
-	Documentation of the final testing session

### Desheng BAN
-	Make a plan about the development approaches and the responsibility
-	Collect  the questionnaire data for summarizing the persona 
-	Take part in the interview 
-	Important contributor in the brainstorming session
-	Designing the event list and event detail page for the project paper prototype.
-	Documentation in the A/B test.
-	Setting up ionic prototype main UI and the detail of the event list and event detail pages. 
-	Setting up ionic server and publish to ionic view APP 
-	Conducted part of ionic  prototype test with users.
-	Documentation of the final testing session


## References
Kietzmann, J. H., Hermkens, K., McCarthy, I. P., & Silvestre, B. S. (2011). Social media? Get serious! Understanding the functional building blocks of social media. Business Horizons, 54(3), 241–251. https://doi.org/10.1016/j.bushor.2011.01.005
University of Queensland Union. (n.d.). Find a Club or Society. Retrieved August 31, 2017, from http://www.uqu.com.au/clubs-societies
