### Updates
28 Sep, 2017
Append the [Design Process](#design-process) section to the document, including process documentation till Week 8.

# Proposal

## Introduction

There are 219 clubs and societies which hold various types of events and enrich the student's campus life at UQ (University of Queensland Union, 2017). However, the power of clubs has not been fully utilised. Some students have never joined a club, and although some of them join clubs, they do not participate in events. 

Several main problems have been identified based on the preliminary research. Non-members are lacking information about clubs and thus find it hard to make decisions when choosing clubs. Members sometimes lose connection with the club and cannot get the latest news. Organisers of clubs put great efforts to promote events and manage the club. 

How can we design to help each category of users enjoy their social lives more? The team conducted interviews, an online questionnaire, and academic research to investigate into the problem space, and decided to design a mobile app to improve the social connections between members and clubs.



### Preliminary research
####  Interviews
We first conducted interviews within our team to get a better understanding of students’ pain points in their social lives at UQ. Nan, Peter and Alvin were the interviewers and Tony and Danson were the interviewees. (Note: When we were conducting the interviews, we just chose the “active community” as our topic, but had no idea about what to design or build.)

>Tony is currently a member of UQ Boxing Club. Based on the interview, we found:
>
 1. Even though Tony joined the club and attended regular boxing classes, he felt lacking communication with other participants, most of whom were UQ students.
 2. Tony knew the Boxing club regularly held other events, such as welcome BBQ, but he did not attend it. Because he had no idea about where and when it would be held.
 3. The main approaches that Tony got news from the club were Facebook and regular classes.
 4. Tony would continue to be a member of Boxing Club because he thought he could build his body and learn boxing skills.
 5. In a boxing class, members were paired. But Tony did not make friends with his partners, potentially because he could not exchange contact details in the class.
 6. He made friends with other members (not his partners) and maintained relationships in WeChat (a popular instant messaging app in China).




>Danson has two roles. First， we interviewed Danson as a potential member of UQ Beer Club. He was interested in the activities (we call them events in the rest of the proposal) that the club held, but he did not join it. We found:
>
 1. He was interested in the events because he loved beer. He knew there was a Beer Club at UQ, but did not participate in any of the events it held.
 2. He had no friends to go together with him.
 3. Most of the club members were local students, as he observed. So he was afraid of language barriers and cultural differences.



>And then, we continued to interview Danson as a committee member (we call him an organiser in the rest of the proposal) of UQ Chinese Student and Scholar Association. He worked for the society as an HR, and based on his experience, we found:
>
 1. His main job was to recruit new committee members for the society.
 2. He found it hard to keep a balance between study and society jobs.
 3. He needed some motivation because he repeated to do similar tasks.
 4. One of his tasks was to inform candidates of the time and place to be interviewed. A typical process how a candidate was informed is illustrated below:

> The process of a candidate being informed of recruitment and interview information
> ![The process of a candidate being informed of recruitment and interview information](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/danson.png#2 "The process of a candidate being informed of recruitment and interview information")


#### Questionnaire
Later on, we designed and distributed an online questionnaire and collected 64 responses in two days. The main findings from the questionnaire are listed below and sorted by the role of participants:

>For potential members:
>
 1. 42% respondents have never joined a club.
 2. 18% of the potential members are not interested in clubs.
 3. They expect an active social club that matches their interests and have some free events.
 4. Activities they like at UQ are (1) freebies (2) Market Day (3) study (4) sports.


>For existing members:
>
 1. 93.5% of them get information about clubs on the Market Day.
 2. They rate the activeness of the club they join as average.
 3. 25% of existing members have never participated in any event.
 4. Main motivations of joining a club are making friends and personal interests.
 5. 61% of them get the latest news from clubs via social media, such as Facebook.
 6. They care about the time, place of the event, whether it is free, whether it is interesting, whether their friends attend, the outcomes, and communication.
 7. It is hard for them to make decisions to participate.
 8. Some of them find disconnected from the club.


>For organisers (who are also existing members):
>
 1. They rate the activeness of the club as high.
 2. All of them use Facebook to inform members of news.
 3. They hold events at least once per month.
 4. They have trouble in organising information, promoting events, collaboration, being motivated and supported.
 5. Their attitudes towards a new mobile social app vary.



### Literature review

According to the research about the relation between the members and organisations, we found out that members would treasure the connection between the organisation and themselves which commitments and rewards are traded at the same level (Ren-Tao, 2011). To adapt this theory to our concept, we decided to make a novel system which allows the system or organisations themselves to reward members according to the attributes they conducted. In this way, users’ motivation can be stimulated significantly, which can improve the current situation that organisations lack active members to participate in events and perform certain tasks. 

With the rise of social media, it is really convenient for an individual or organization to publicise and advertise content for their certain purposes. They no longer only rely on traditional marketing and public relations. Kietzmann et al. claim a framework of seven functional blocks to explain each important part of social media, which includes identity, conversations, sharing, presence, relationships, reputation, and groups (Kietzmann et al., 2011).

![The honeycomb of social media](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/honeycomb.jpg "The honeycomb of social media")

A social media platform focuses on several elements of the honeycomb model. For example, Facebook mostly covers relationships, presence, identity, conversations, and reputation. Whereas in our concept, we decided to focus more on groups, identity, sharing, and reputation.



## Concept

The goal of our project, UQ ClubHub, is to improve the social connections between members and clubs. It allows members to know more about various clubs and societies and the events they hold. It helps members make decisions when choosing clubs to join and events to attend. For organisers, the app is designed to facilitate club management and event operation. To achieve these goals, our team have decided to design a mobile app as the final form of our product. Due to the fact that users would like to be informed about adjacent events and access all the information anywhere, anytime, mobile phones would be the best platform for our product. Within a mobile app, all the utility and functionalities can be integrated effectively.



### Main features
The main features of the product involve:

 1. filtering available events to users;
 2. presenting information about clubs and events;
 3. allowing users to follow a club as a potential member, participate in an event as a casual member, or join a club as a loyalty member;
 4. allowing users to link their account and Facebook, 
 5. rating the activeness of clubs and members, including a rewarding mechanism to motivate participation, and
 6. having a good utility for organisers, including a social network diagram to visualise relationships between members within a club. 



### Highlights
#### Enhance information transparency
The product offers users an integrated platform for exchanging and sharing information associated with clubs and events. By such means, information becomes more transparent to potential and existing members, which helps them to make better decisions and be aware of surrounding events. 
The concept is useful for both organisers and members. For organisers, at the stage of planning of a future event, the platform will allow them to collect feedback from members. Then, the organisers are able to use the information to adjust the event for better outcomes. This can significantly avoid holding an event that no one is interested to come or a waste of time and time for the club. For students who are interested in attending a club or event, this platform will exist as the official means of publishing related events information which provides related detailed information of events according to the user's preferences. Thus, the problems that members cannot timely receive notification from clubs and receive duplicated information from various social media will be solved. 
####  Make activeness measurable
UQ ClubHub provides an activeness evaluation system and a corresponding rewarding system for all participants to stimulate members’ motivation.
The activeness evaluation system will give a different valuation to members in different clubs based on their contributions to the clubs such as attending an event and being a volunteer, etc. The valuation of activeness will be shown in the form of "level"s. According to the “level” in a certain club, different badges will be awarded as special identity rewards. This will positively encourage all members in the clubs to participant in and support related events. 
#### Explore a new pathway to joining a club 
The traditional mode for students to join clubs relies too much on the Markey Day, and students join a club without a holistic understanding of the club and the events it holds.
![A new mode to join a club](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/newmode.png#1 "A new mode to join a club")
To change this current means of joining clubs, the app provides a unique way for users by allowing them to choose to “follow” a club as a potential member, “participate” in an event as a casual member of the club, or “join” the club as a loyalty member. Via UQ ClubHub, all users define their relationships with multiple clubs according to their personal interests easily.
#### Value friendship
Users can become friends with other ones in UQ ClubHub, or import their existing social relationship from other social media, such as Facebook.
The app does not offer instant messaging functions like Facebook, but a user can see his or her friends in an event or a club. Barriers and worries can be reduced by being aware of companions, and motivation is increased.




### Target audience
General speaking, the target audience of UQ ClubHub is current students of UQ, including non-members, members, and organisers of UQ clubs and societies. Here are personas created for each type of users. 
#### Personas
Ben Jefferson - a representative of non-members
![Persona 1](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/persona1.png#2 "Persona 1")
Brian Kiley - a representative of members
![Persona 2](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/persona2.png#3 "Persona 2")
Matthew Alexander - a representative of organisers
![Persona 3](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/persona3.png#2 "Persona 3")




### Expected outcomes & Vision
At the end of the semester, the team shall be able to finish a high-fidelity interactive prototype that meets the basic usability requirements and is testable to collect the target audience's responses to the concept. Throughout the rest of the semester, we are going to keep iterating the prototype and the concept to meet students' goals and make more of them regard the concept as helpful.

If our concept was fully developed and widely used by UQ students, a new club and event operating mode would be created. Users will be offered a simple way to find out which clubs to join and which events to participate in by their preferences without the limitation of time and space, and do not have to be worried about missing the Market Day which is the key node of attending clubs and events at present. 

All in all, the application can not only simplify the process of joining clubs and holding club events for all users but also enhance the connections between the club and its members, which can significantly promote the development of UQ social clubs.




### Competitor analysis
Besides what is explained in the [social media honeycomb model](#literature-review), the differences between our project and other existing platforms (Facebook and Slack) are listed below.
![Competitor Analysis](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/competitoranalysis.png#1 "Competitor Analysis")




## Team

### Members
| FULL NAME          | PREFERRED NAME | STUDENT NO. | COURSE CODE | MAJOR                              | ROLE                   | EXPERIENCE                                                                                     |
|---------------|----------------|-------------|-------------|------------------------------------|------------------------|------------------------------------------------------------------------------------------------|
| Chunnan Zheng | Nan            | 44097938    | DECO7350    | Master of Interaction Design       | Team leader & Designer | He has previous experience in studios and is good at the whole design process and project management. |
| Desheng Ban   | Danson         | 44017392    | DECO7350    | Master of Interaction Design       | Designer, Transport & Meeting Management  | He is good at the front-end development and handcraft.                                         |
| Yiming Peng   | Peter          | 44882143    | DECO7350    | Master of Interaction Design       | Designer               | He was an architect and good at graphic design.                                                |
| Tianyi Zhang  | Tony           | 43986101    | DECO7350    | Master of Interaction Design       | Designer & Developer   | He is good at designing digital prototypes and organising user tests.                          |
| Yifan Lu      | Alvin          | 44106782    | DECO3500    | Bachelor of Information Technology | Developer              | He has many software development experiences.                                                  |


### Task allocation
![Task allocation](https://s3-ap-southeast-2.amazonaws.com/nanzheng.design/sociaomobilecomputing/tasks.png#1 "Task allocation")



### Decision-making
Everyone has the right to make a decision. Generally, we use a fair method, voting, to make a decision after thorough discussion. To ensure efficiency and quality of discussion, we have regular meetings every week. Each member should participate in meetings, discussion, data collection and analysis. During the meeting, we will review the previous work and discuss new tasks. Everyone should talk about their own ideas and list them on the whiteboard. Then we choose the most suitable one according to the project requirements. If there are two ideas meet the requirements at the same time, we will conduct A/B tests to examine both of them. Plus, we would ask the teaching staff for suggestions. 




### Conflict-solving
We cannot ensure that everyone has the exact equivalent workload. However, we will allocate tasks to each member fairly according to the project plan. If someone performs poorly or cannot finish the personal task on time, our group will talk about this issue. If necessary, a warning will be given. If this situation happens more than three times, we will talk to tutors and lecturers, in case we cannot finish the project on time. During the meeting, each member needs to report what has been completed, what the team member is working on and the future plan. This is a kind of way to supervise group members with a positive attitude in the project progress.  
 
We will try our best to avoid the conflicts. The regular meeting and decision-making method provide a good way to express the personal idea. If a conflict happens, we will give members enough time to clarify their thought. Group members will together analyse the reason and problem of the conflict. If a big conflict happens in our group, we will ask other groups to involve to coordinate. Otherwise, we will look for help from the teaching staff. However, we will as far as possible avoid the conflict. 




### Design approaches
Empathy: In this stage, we use literature review, questionnaire, interview and discussion as initial research methods. Firstly, for the background research, we do academic research to find some related papers to support our concept. Then, we use a questionnaire and interviews to collect data and analyse it to identify the aims, purposes of the project and initial user requirements. The questionnaire mainly includes three kinds of groups: the organiser of a club or society, members of a club, students who never joined a club. These people provide different information for us to analyse. We discussed the idea with the teaching staff to get some feedback.  

Design: In this stage, Questionnaire, brainstorming, related products analysis and academic research are used to support conceptual design. 
 
Prototype: In this stage, Sketch, InVision and other design tools, such as PS and AI will be used to build prototypes for the concept. At first, we will use sketches the basic wireframes. The wireframes mainly include the layout of each screen, some pseudo content and the interaction flow. Based on the wireframes, we will test whether the target audience accepts the idea, which features works and which not. Later on, we will use Sketch and InVision (including Craft) to design a digital prototype with higher fidelity.
 
Iteration: The iteration process includes concept iteration and prototype iteration. The concept will be iterated according to the feedback we collect from representative users and the concept criteria. The criteria come from the course requirements, usability requirements, and the expected outcomes of the project. The prototype iteration, as the name suggests, is changes made to prototypes according to the user test and the user’s feedback. In the user test, observation, questionnaire and interview methods will be used to collect feedback. We will also ask participants to think aloud when they interact with the prototype. The interview focuses more on user experience issues.




## Communication

### Regular meeting sessions
The team has a regular 2-hour meeting at the workshop on Tuesday afternoon. Since team members have signed onto different practical sessions, we plan to attend the second half of P01 and the first half of P02 on Wednesdays, which is another two hour. If needed, extra meeting or working time will be discussed according to the team members’ available time.




### Platforms for communication
The team has set up a Github repository, a Slack channel, a Google Drive folder, and a Wechat group. 
####  GitHub
The Github repository will be used to document the main content of the project, such as the interface design files and the team’s deliverables for the course. Github URL: https://github.com/deco3500-2017/TeamBeyondBeingThere
#### Google Drive
The Google Drive folder is for documentation of the design process and file exchange. For example, the photos of brainstorming have been uploaded to the folder. Google Drive URL: https://drive.google.com/drive/folders/0B3s2700t81vTZ0xiWjV1R1kzTGc?usp=sharing
#### WeChat
WeChat is the most common instant messaging app which all team members regularly use. So we set up a group in the app and use the app as the main online communication tool.
#### Slack
A slack channel has also been set up as a supplementary approach to collaboration. Slack channel: #deco3500-clubhub




### File management
In the Google Drive folder and the Github repository, files should be clearly classified and stored in folders. All names of files and folders should be understandable, and no file should remain “untitled”. Spaces are allowed to be used in file names, if necessary. 

Other rules involve (1) Upper- and lower-cases should be properly used in file names; (2) Index number should be involved in brackets. 

For example, photos of the brainstorming process should be named as “Brainstorming (1).jpg” to “Brainstorming (3).jpg”.

Nan is in charge of checking all file names on all platforms to keep them consistent.




### Milestones
Milestones and main tasks to do before each milestone are listed below and also have been set up in our Github repository:
https://github.com/deco3500-2017/TeamBeyondBeingThere/milestones?direction=asc&sort=due_date&state=open

#### Week 5 - Empathise - Initial Research
> - Tasks:
> 1. Design and conduct an online questionnaire to collect the target user’s opinions on the problem.
> 2. Brainstorm to identify the problem space and ideate the initial idea.
> 3. Conduct academic research
> - Deliverables:
> 1. At least 50 responses to the questionnaire should be collected
> 2. Determined the form of the solution
> 3. A list of main features of the design
> 4. A list of findings of academic research
> - Resources:
> 1. Access to prospective users
#### Week 6 - Ideate - Concept & Proposal
> - Tasks:
> 1. Gain feedback from peers in the workshop
> 2. Refine personas
> 3. Proposal writing
> - Deliverables:
> 1. A refined list of main features
> 2. Refined personas
> 3. Proposal
#### Week 7 - Design - Concrete Design
> - Tasks:
> 1. Turn conceptual design into concrete design
> 2. Design the interaction flow
> 3. Sketch the main screens 
> 4. Determine the interface theme, including colour scheme, font, etc.
> - Deliverables:
> 1. A diagram of the interaction flow
> 2. Sketches of the main screens
> 3. UI guidelines
#### Week 8 - Prototype & Evaluate - Low-Fidelity Prototype
> - Tasks:
> 1. Prototype in low fidelity
> 2. Invite users to test the initial concept with the prototype
> 3. Prepare for the report back in workshop
> - Deliverables:
> 1. A low-fidelity prototype
> 2. User test protocol, including a questionnaire
> 3. User test report (informal)
> - Resources:
> 1. Time, place to test
> 2. User test participants (n>5)
#### Week 9 + Mid-Semester Break - Design & Prototype - Iteration
> - Tasks:
> 1. Make changes based on the outcomes of the previous user test
> 2. Prototype in high fidelity
> - Deliverables:
> 1. A high-fidelity prototype with interactivity
> - Resources:
> 1. Access to Sketch, InVision and Craft.
#### Week 10 - Evaluate - High-Fidelity Prototype
> - Tasks:
> 1. Test the usability of the high-fidelity prototype
> 2. Prepare for the report back in workshop
> - Deliverables:
> 1. User test protocol, including a questionnaire
> 2. User test report (informal)
> - Resources:
> 1. Time, place to test
> 2. User test participants (n>5)
#### Week 11 - Design & Prototype - Iteration
> - Tasks:
> 1. Make changes based on the outcomes of the previous user test
> 2. Start to design a conference paper
> - Deliverables:
> 1. Refined prototype
#### Week 12 - Finalise - Final Prototype & Promotional Materials
> - Tasks:
> 1. Finish all remaining tasks
> 2. Prepare for the report back in workshop
> 3. Prepare promotional materials for the final demonstration, such as flyers, lollies, etc.
> - Deliverables:
> 1. Conference poster
> 2. Other promotional materials
> 3. Final prototype
> - Resources:
> 1. Budget for the promotional materials
#### Week 13 - Demonstrate - Demonstration
> - Tasks:
> 1. Demonstrate the final prototype




## Changes made based on the feedback from Pitch

#### Focus on the member’s relationship with clubs
Based on the feedback from the teaching staff, we can see the main focus of our concept was not clearly conveyed. In our pitch, we wanted to use the concept to improve the member’s relationships with both the club and other members. This was because one of the reasons why students wanted to join a club was to meet friends. Therefore, although the main focus of our concept was to enhance the social connection between the member and the club, we added some features to empower members to connect one another. However, it made the main focus ambiguous. The audience of our pitch was more curious about the supplementary features than the main features. So after receiving the feedback, we removed the feature which supported communication among members to emphasize the main feature. 

#### Differences from Facebook
Some features of our concept were similar to, but different from, Facebook Page and events. We added a section in the proposal to compare our concept to Facebook. Please refer to [Competitor analysis](#competitor-analysis).




## Tags
\#Asynchronous Distributed Interaction 
\#awareness 
\#social
\#Social Software 
\#identity 
\#community
\#mobile




# References

Kietzmann, J. H., Hermkens, K., McCarthy, I. P., & Silvestre, B. S. (2011). Social media? Get serious! Understanding the functional building blocks of social media. Business Horizons, 54(3), 241–251. https://doi.org/10.1016/j.bushor.2011.01.005

Ren-Tao, M. (2011). Perceived Organizational Support, Job Satisfaction, Task Performance and Organizational Citizenship Behavior in China. Journal Of Behavioral & Applied Management, 12(2), 105-127.

University of Queensland Union. (n.d.). Find a Club or Society. Retrieved August 31, 2017, from http://www.uqu.com.au/clubs-societies

Xtensio. (n.d.). Persona Template. Retrieved August 31, 2017, from https://app.xtensio.com/

# Design Process

## Week 8

### Group progress
The main achievements that the team has finished involve two different designs for each main screen, two rounds of peer critiques within the team, and an A/B test with target users.

#### Sketches
First, the team broke the concept down to 5 main screens of the app and each member was in charge of designing one screen. The screens consisted of the (1) home screen, (2) event screen, (3) club screen, (4) user screen, and (5) filter screen. Correspondingly, members in charge were (1) Peter, (2) Danson, (3) Tony, (4) Nan, and (5) Alvin. Before doing tasks individually, the team converted the user's requirements into design specifications for each screen together. 

![design specifications for each screen](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%208%20-%20A-B%20test/Photos%20and%20screenshots/Wk8_process_1.jpeg "design specifications for each screen")


#### Peer critiques
Two rounds of peer critiques were conducted in the team's regular meetings. 

In the first round of critique, group members gave each other opinions on the overall design of each screen, and decided to explore the possibilities of the design of each screen by sketching two different types of design and test the design by running an A/B test.

![first round sketches](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%208%20-%20A-B%20test/Photos%20and%20screenshots/Wk8_process_2.jpeg "first round sketches")

In the second round of critique, more details of the design of each screen were looked into and examined. Decisions on changes were made to prepare for the A/B test.

![second round sketches](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%208%20-%20A-B%20test/Photos%20and%20screenshots/Wk8_process_3.jpeg "second round sketches")


#### A/B test
Finally, the team as a whole has finished a paper prototype and run an A/B test with 6 participants involved. Participants are representative users from different countries and majors as different roles in clubs (i.e, potential members, existing members, and organisers).

Time: 12:00-15:00, 14 Sep, 2017  (30 mins for each)
Place: Room 108, Building 78

![photos and screenshots of user tests](https://raw.githubusercontent.com/deco3500-2017/TeamBeyondBeingThere/master/Design%20Process/Week%208%20-%20A-B%20test/Photos%20and%20screenshots/Wk8_process_4.jpeg "photos and screenshots of user tests")

Notes taken in the testing session can be found at the team repository at:
TeamBeyondBeingThere/Design Process/Week 8 - A-B test/Testing session feedback.docx

### Issues

#### Exploring possibilities v.s. Unifying designs
The team did not want to limit the design at the early stage, so all members were involved in the initial design phase. But the problem was that all designs look extremely different and the app then lacked consistency and was hard to learn and use, as confirmed in the A/B test. 

To solve the problem, the team will work individually after the A/B test to best utilise each member's abilities. One or two will work on the interaction and interface design, and others will work on the development of the prototype and facilitating user tests. By limiting the quantity of members working on the same task, it is more likely that the design is consistent and unified. Also, the A/B test and the feedback from it can make every member of the team get a coherent understanding of the user's requirements. 

#### Prototyping tools
As planned previously and described in the proposal, the team intended to use Sketch and inVision to build a prototype for the concept. However, the teaching staff questioned about the choice during our stand-up in the workshop. After discussion, the team decided to try a new prototyping tool, called ionic framework. The team will start from learning the tool by watching training videos first and finding some examples. In the next week, the team will evaluate the feasiility of using such tool for the development of our prototype, with time, learning and budget issues taken into account.

### Plan

#### Analysis of the A/B test outcomes
The team will analyse the data collected from the A/B test and make decisions on the changes to the future design in Week 9.

#### Learning new prototyping tools
Team members will start to learn the ionic framework with respect to their roles and responsibilities. For example, Alvin is responsible for the back-end development and database design, so he will learn how to integrate database into ionic framework. 

#### Wireframes, UI, prototyping
As planned earlier, the team will finish concrete design of the concept and build a digital prototype in Week 9 and the mid-semester break. A refined prototype is expected to be built before Week 10. For specific tasks, please refer to the next section.

### Task allocation for the next two (or three, including mid-semester break) weeks

#### Nan
> Responsibilities: Unifying all designs, interaction design, basic structure of app

> Expected outcomes: Wireframes of all main screens
#### Peter
> Responsibilities: User interface design

> Expected outcomes: Detailed UI in Sketch formats
#### Alvin
> Responsibilities: Back-end development

> Expected outcomes: Having a basic understanding of the ionic framework, outcomes of the evaluation of the feasibility of applying the technique
#### Tony
> Responsibilities: Front-end development

> Expected outcomes: Basic structure of the app in the ionic editor (together with Danson)
#### Danson
> Responsibilities: Front-end development

> Expected outcomes: Basic structure of the app in the ionic editor (together with Tony)