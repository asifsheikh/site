import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogContent from '@/components/BlogContent'

interface BlogPost {
  slug: string
  title: string
  content: string
  excerpt: string
  image: string
  category: string
  readTime: string
  publishDate: string
  author: string
}

const blogPosts: { [key: string]: BlogPost } = {
  'art-of-code-reviews': {
    slug: 'art-of-code-reviews',
    title: 'The Art of Code Reviews: Building Better Teams',
    excerpt: 'How to conduct effective code reviews that improve code quality, knowledge sharing, and team collaboration. Practical tips from years of experience in mobile engineering teams.',
    image: '/blog-images/code_review.png',
    category: 'Team Building',
    readTime: '9 min read',
    publishDate: 'March 5, 2025',
    author: 'Asif Shaikh',
    content: `
# The Art of Code Reviews: Building Better Teams

Picture this: It's 3 PM on a Tuesday, and you're staring at a pull request that's been sitting in your queue for two days. The author is a junior developer who's clearly put their heart into this feature. But as you scroll through the code, you can't help but notice several issues that need addressing.

How do you provide feedback that helps them grow without crushing their confidence? How do you catch bugs while building a stronger team?

After years of conducting code reviews at Spotify, GoJek, and other companies, I've learned that the way we review code can make or break team dynamics. It's not just about finding bugs—it's about building better humans.

## The Human Side of Code Reviews

Let me share a story that changed how I think about code reviews.

Early in my career at Spotify, I was reviewing a pull request from a talented junior developer. The code worked, but it wasn't following our established patterns. My first instinct was to point out every deviation from our style guide. But then I remembered something my mentor had told me: "You're not just reviewing code—you're mentoring a person."

Instead of a laundry list of "fix this, fix that," I started with: "Great work on implementing this feature! I can see you've really thought through the edge cases. I have a few suggestions that might make this even better..."

The difference was night and day. The developer was engaged, asked thoughtful questions, and we ended up having a great discussion about architecture patterns. That experience taught me that code reviews are conversations, not corrections.

## The IKEA Effect: Why We Get Defensive

Here's something fascinating I learned from [Philipp Hauer's work on code review psychology](https://phauer.com/2018/code-review-guidelines/): The IKEA effect.

When you assemble IKEA furniture yourself, you value it 63% more than if someone else had assembled it. The same thing happens with code. We place disproportionate value on code we've written, making it harder to accept feedback.

I've seen this play out countless times. A developer spends days perfecting a solution, only to receive feedback that suggests a different approach. Their first reaction? Defensiveness. "But my way works!" they think.

The key insight? **You are not your code.** Criticism of your code is not criticism of you as a human being. Once you internalize this, code reviews become opportunities for growth rather than personal attacks.

## The Three Filters: Is It True, Necessary, and Kind?

Before leaving any comment, I ask myself three questions inspired by April Wensel's compassionate code review approach:

**Is it True?**

Wrong: "You should use getter and setter. This code is wrong."

Is it true? This assumes an absolute truth that rarely exists. Avoid words like "right," "wrong," and "should." Often, you're just expressing your opinion.

Right: "In this case, I would recommend using getter and setter because it improves encapsulation. What do you think?"

**Is it Necessary?**

Wrong: "There's a space missing here."

Is it necessary? I believe there are more important things to discuss than missing spaces. Nagging tends to annoy the author and reduces their openness to feedback.

Right: "Let's focus on the core logic. The spacing is fine."

**Is it Kind?**

Wrong: "This factory is badly over-engineered. The trivial solution is to just use the constructor."

Is it kind? Absolutely not! This statement is shaming and makes the author feel stupid.

Right: "This factory feels complicated to me. Have you considered using a constructor instead? It might be simpler for this use case."

## The Art of I-Messages

One of the most powerful techniques I've learned is using I-messages instead of you-messages.

Wrong: "You are writing cryptic code."
Right: "It's hard for me to grasp what's going on in this code."

Why does this work? Because it's hard to argue against someone's personal feelings. When you say "I find this confusing," the author can't respond with "No, you don't!" They can only ask "What would make it clearer for you?"

## The OIR Rule: Observation, Impact, Request

When giving feedback, I follow the OIR pattern:

**Observation**: "This method has 100 lines."
**Impact**: "This makes it hard for me to grasp the essential logic of this method."
**Request**: "I suggest extracting the low-level details into subroutines with expressive names."

This approach is non-confrontational and focuses on the impact rather than the person.

## Don't Jump in Front of Every Train

Here's a mistake I made early in my career: I felt like I had to comment on every single line of code. The result? Authors became defensive and stopped listening to my feedback.

Now I focus on the issues that matter most. A missing space? Not worth mentioning. A potential security vulnerability? Absolutely worth discussing.

The goal isn't to be a pedant—it's to help create better software and stronger teams.

## The Power of Questions

Instead of making statements, ask questions. This encourages discussion and learning.

Wrong: "This variable should be named 'userId'."
Right: "What do you think about using 'userId' for this variable? It might be clearer than 'id'."

Questions invite collaboration. Statements invite resistance.

## Accepting Different Solutions

One of the hardest lessons I've learned is that there are often multiple valid solutions to the same problem. Just because I would approach something differently doesn't mean the author's approach is wrong.

Right: "I would do it this way, but your solution is also fine. What made you choose this approach?"

This opens up a conversation about trade-offs and helps everyone learn.

## The Author's Mindset: Be Humble

For authors, the key is maintaining a humble mindset. To err is human—everybody makes mistakes. This doesn't mean you should code carelessly, but it does mean you should accept that you'll make mistakes and that's okay.

Remember: **You are not your code.** Programming is just a skill that improves with training, and that improvement never stops.

## Creating a Culture of Learning

The best code reviews I've been part of felt like learning sessions. The author and reviewer were exchanging knowledge, not just catching bugs.

At Spotify, we had a practice where senior developers would explain the "why" behind their suggestions. Instead of just saying "extract this method," they'd explain how it improves testability or makes the code more maintainable.

This approach turned code reviews into mentorship opportunities that benefited everyone involved.

## The Three Pillars of Effective Code Reviews

Based on my experience, effective code reviews rest on three pillars:

1. **Respect**: Treat the author as a valued team member, not someone who needs to be corrected
2. **Learning**: Use reviews as opportunities to share knowledge and grow together
3. **Collaboration**: Work together to create the best possible solution

## A Personal Story: The Review That Changed Everything

Let me share a story that illustrates the power of compassionate code reviews.

I was reviewing a pull request from a developer who had been struggling with confidence. The code had several issues, but instead of pointing them out directly, I started with what they had done well.

"Great job handling the error cases! I can see you've really thought through the edge scenarios. I have a few suggestions that might make this even more robust..."

The result? They were engaged, asked thoughtful questions, and we ended up having a great discussion about error handling patterns. More importantly, their confidence grew, and they started contributing more actively to team discussions.

That experience taught me that code reviews aren't just about code—they're about people.

## The Ripple Effect

When you conduct code reviews with empathy and respect, something beautiful happens: it creates a ripple effect. Team members start treating each other with more kindness. They become more open to feedback. They start learning from each other.

I've seen teams transform from competitive environments where people were afraid to make mistakes into collaborative spaces where everyone is focused on building better software together.

## Wrapping Up: The Art of Human Code Reviews

Code reviews are an art that requires practice, empathy, and a focus on human connection. They're not just about finding bugs—they're about building better teams, sharing knowledge, and creating a culture where everyone can grow.

The next time you're reviewing code, remember: you're not just looking at lines of code. You're working with a human being who has put their time, effort, and creativity into solving a problem. Treat them with the respect and kindness they deserve.

Ask yourself: Is this feedback true, necessary, and kind? Will it help this person grow? Will it make our team stronger?

If the answer is yes to all three, then you're not just reviewing code—you're building a better future for your team.

---

*What's your experience with code reviews? Have you had a review that changed how you think about feedback? I'd love to hear your stories and continue this conversation about building better teams through better code reviews.*
    `
  },
  'solid-principles-separation-of-concern': {
    slug: 'solid-principles-separation-of-concern',
    title: 'SOLID Principles – Separation of Concern',
    excerpt: 'The first in a series on SOLID principles. Learn about Separation of Concern (SoC) - a foundational concept that helps organize code so each part does only one kind of task. Includes practical Kotlin examples.',
      image: '/blog-images/solid.png',
    category: 'Tech',
    readTime: '5 min read',
    publishDate: 'April 6, 2019',
    author: 'Asif Shaikh',
    content: `
# SOLID Principles – Separation of Concern

In this blog post, I'm starting a series to explain the famous **SOLID principles** of software development. These are five core principles that help us write better, cleaner, and more maintainable code. I'll break the series down into individual posts for each principle so we can focus on understanding one at a time.

Whether you're just starting out or already working as a senior engineer, knowing these principles will help you design better systems. And let's be honest — writing code can feel frustrating, stressful, and even boring if it's messy. But when done right, it becomes fun, satisfying, and creative.

So let's begin this journey with the first one:

---

## Separation of Concern (SoC)

Even though SoC is not the "S" in SOLID (we'll get to that in the next blog), it's a very foundational concept that supports all of the SOLID principles. SoC is about organizing your code in a way that **each part of your program does only one kind of task** or is responsible for only one thing.

In simple terms:

> **"Don't put everything into one place."**

---

## Why is Separation of Concern important?

Imagine you're building a small app that shows a list of users.  
Now think about everything you need to do:

* Fetch users from the internet
* Parse the data
* Display it on screen

If you do **all of this inside one function or one class**, it becomes hard to read, test, or update in the future. That's what SoC helps you avoid.

---

## A Simple Kotlin Example

Let's take an example in Kotlin:

\`\`\`kotlin
// BAD: Everything in one place
class UserManager {

    fun loadAndShowUsers() {
        // Fetching data
        val response = URL("https://api.example.com/users").readText()

        // Parsing data (simplified)
        val users = response.split(",").map { it.trim() }

        // Showing data
        println("Users: $users")
    }
}
\`\`\`

In the above code, fetching, parsing, and displaying — everything is inside one function. This breaks the SoC principle.

---

## Let's Fix It with Separation of Concern

Let's now split responsibilities:

\`\`\`kotlin
// 1. Responsibility: Fetching users
class UserService {
    fun fetchUsers(): String {
        return URL("https://api.example.com/users").readText()
    }
}

// 2. Responsibility: Parsing users
class UserParser {
    fun parse(rawData: String): List<String> {
        return rawData.split(",").map { it.trim() }
    }
}

// 3. Responsibility: Displaying users
class UserPresenter {
    fun show(users: List<String>) {
        println("Users: $users")
    }
}

// 4. Coordinator class that brings them together
class UserManager(
    private val userService: UserService,
    private val userParser: UserParser,
    private val userPresenter: UserPresenter
) {
    fun loadAndShowUsers() {
        val rawData = userService.fetchUsers()
        val users = userParser.parse(rawData)
        userPresenter.show(users)
    }
}
\`\`\`

Now:

* \`UserService\` only fetches data.
* \`UserParser\` only parses it.
* \`UserPresenter\` only displays it.
* \`UserManager\` coordinates everything.

Each class has **a single concern**, and that's the beauty of SoC.

---

## Benefits of Separation of Concern

* ✅ Easier to understand code
* ✅ Easier to test (e.g. you can test \`UserParser\` independently)
* ✅ Easier to change or extend (e.g. switch from console output to a UI without touching parsing logic)
* ✅ Better teamwork (team members can work on separate parts)

---

## Final Thoughts

Separation of Concern is a principle that sets the foundation for good architecture and clean code. It's not just for big projects — even small apps can benefit from writing code with clear separation between responsibilities.

In the next blog post, I'll cover the **Single Responsibility Principle**, which builds on the same idea and is the "S" in SOLID.

Let's keep writing clean, enjoyable code ✨

---

*This post is part of my series on SOLID principles. Check out my other posts on software design, mobile engineering, and building better teams.*
    `
  },
  'getting-interviewed-at-spotify': {
    slug: 'getting-interviewed-at-spotify',
    title: 'Getting Interviewed at Spotify – A Dream Come True',
    excerpt: 'My journey through Spotify\'s interview process for an Android Engineering position in Stockholm. Learn about their structured approach, remote interviews, and the four distinct final rounds that make Spotify stand out.',
    image: '/blog-images/spotify_interview.png',
    category: 'Tech',
    readTime: '7 min read',
    publishDate: 'February 6, 2022',
    author: 'Asif Shaikh',
    content: `
# Getting Interviewed at Spotify – A Dream Come True

Spotify has always been a dream company for me — not just because it's one of the best engineering companies out there, but also because of the innovation, culture, and impact it drives at a global scale. After months of focused preparation, countless interviews at various companies, and a fair share of rejections, I was incredibly fortunate to crack the interview process at Spotify.

## Why Spotify Stood Out

From the very beginning, Spotify's interview process stood out for its structure, transparency, and emphasis on the right aspects in each round. The recruiter coordination was top-notch — smooth, timely, and reassuring. It felt less like a traditional hiring process and more like a two-way conversation to explore mutual fit.

## Remote Interviews in a Post-Pandemic World

In today's world, in-person interviews have become a thing of the past. Most companies, including Spotify, have adapted to a virtual interview process. While coordinating interviews across time zones can be challenging, Spotify managed it effortlessly. From application to final decision, the process took around **two months** — and every step felt thoughtful and well-managed.

## The Application Process

I applied for the **Android Engineering position in Stockholm** through the Spotify Careers website, which is comprehensive and user-friendly. It contains detailed information about open roles and the overall application process.

A few weeks after submitting my application, I was contacted by a recruiter for an initial phone call. The call was relaxed and friendly — mainly focused on understanding my background and ensuring I had clarity about the role and Spotify's expectations.

## The Interview Journey

After the initial call, I moved on to two main phases of the interview process: the **second round** and the **final (onsite) rounds**.

> 💡 _Note: Each round usually included a panel of two interviewers — one leading the interview and the other shadowing, which is quite common and nothing to worry about._

---

### ✅ **Second Round: Deep Dive Screening**

This round involved:

* A discussion on my technical background
* Android domain-specific questions
* A coding exercise (in Java and Kotlin)
* A few follow-up questions based on my solutions

This round felt like a thorough screening and went really well. A few days later, I received positive feedback and was invited for the final rounds.

---

### 🎯 **Final Rounds (Onsite)**

The final stage consisted of **four distinct interviews**, each about an hour long. These were scheduled based on mutual availability — often packed into one or two days, giving enough time in between for preparation.

Here's a breakdown of each round:

1. **Programming / DSA Round**  
Focused on data structures, algorithms, and complexity analysis. You'll be expected to code, explain your approach, and optimize solutions.

2. **System Design Round**  
A deep dive into designing, building, and scaling real-world systems — testing your architectural thinking and trade-off analysis.

3. **IDE Programming Round**  
A hands-on session in Android Studio. This is a live coding, screen-sharing, and pair-programming style interview — designed to simulate day-to-day development work.

4. **Spotify Values Interview**  
A cultural fit round to understand the engineering environments you've worked in and how you align with Spotify's values. The key here is **authenticity** — be yourself and speak from experience.

---

## 🎁 Pro Tips for Future Candidates

* **Start simple, then iterate.** Begin with a basic solution and evolve it based on feedback or new insights.
* **Be honest.** It's okay not to know everything. Acknowledging gaps is better than faking it.
* **Ask questions.** If something is unclear, don't hesitate to ask. Interviews are conversations, not interrogations.
* **Think out loud.** Communicate your thought process — it helps the interviewers understand your reasoning and problem-solving style.

---

## Wrapping Up

Once the final interviews were complete, I received feedback within a few days — regardless of the outcome, Spotify ensures timely communication, which I deeply appreciated.

If you're dreaming of working at Spotify or a similar company, keep going! Stay curious, keep learning, and most importantly — be authentic. Wishing you all the best in your journey 🚀

---

*This post is part of my series on career growth and interview experiences. Check out my other posts on team dynamics, mobile engineering, and building better teams.*
    `
  },
  'navigating-team-dynamics-spotify': {
    slug: 'navigating-team-dynamics-spotify',
    title: 'Navigating Team Dynamics: An Engineer\'s Guide to Seamless Embedding at Spotify',
    excerpt: 'Learn about Spotify\'s unique approach to internal mobility and team embedding. Discover how engineers can grow by working across different teams and the benefits this brings to both personal development and organizational culture.',
    image: '/blog-images/team_dynamics.png',
    category: 'Tech',
    readTime: '8 min read',
    publishDate: 'December 17, 2023',
    author: 'Asif Shaikh',
    content: `
# Navigating Team Dynamics: An Engineer's Guide to Seamless Embedding at Spotify

In most software companies, engineers are typically assigned to specific teams, each responsible for their own deliverables. While this setup can be efficient in the short term, I firmly believe that gaining exposure to different teams is essential for long-term professional growth.

That said, not all companies are receptive to this idea. In some organizations, the notion of engineers moving between teams is met with skepticism, often misinterpreted as a lack of commitment to their original team. Although cross-team collaboration is common—usually sparked by business needs—it's rare to see internal mobility driven purely by an engineer's desire to grow.

Imagine expressing this to your manager during a 1:1:

> _"I'm eager to contribute to the exciting projects happening in the XYZ team for the upcoming quarter and then bring the knowledge and experience back to our current team."_

The response can be hard to predict. It might be met with hesitation or even a suggestion to **permanently** move to that team instead. In many environments, this idea is seen as disruptive rather than developmental.

From my own journey, I've observed that only a few companies truly encourage engineers to embed with different teams for the sake of personal and professional development. Spotify is one of them—and it does so with remarkable thoughtfulness and intention.

---

## **Embedding at Spotify: A Culture of Flexibility and Growth**

Spotify's organizational culture stands out in its support for embedding engineers across teams—and for good reason. Different teams require different skill sets, and those needs evolve constantly. For example, a top-tier Android or iOS engineer might be underutilized in their current team but could make a big impact elsewhere.

The beauty of Spotify's approach is its **flexibility**. Embedding durations vary—some last a few weeks, others span several months—based on what works best for the engineer and the teams involved. This dynamic model not only promotes skill-sharing but also fuels a culture of agility and continuous learning.

When engineers embed with another team, they typically commit full-time to that team, with little to no ongoing obligations to their original team. This allows them to be fully present and deliver meaningful impact.

---

## **Key Takeaways from My Embedding Experience**

### 🔁 **Connecting with Fresh Perspectives**

Embedding opens doors to new people, fresh ideas, and different engineering styles. Collaborating with a new team helps you build relationships across the organization and expands your professional network—something that can pay dividends in future cross-team efforts or career moves.

---

### 📚 **Bilateral Knowledge Exchange**

The learning isn't one-sided. You absorb new workflows and practices, while also bringing in perspectives from your original team. During my embed, I participated in code pairing sessions with several mobile engineers. Although my background was on Android, working closely with the iOS team helped me understand a new platform and broaden my technical scope.

---

### 🌐 **Exploring New Facets of the Business**

Most teams focus on a specific domain, leaving limited room to understand broader company challenges. Embedding allowed me to work on a completely different business domain, giving me a more holistic view of Spotify's ecosystem. I've also seen successful examples where engineers embedded into platform teams and emerged with a deeper understanding of developer workflows—becoming more well-rounded engineers as a result.

---

### 🏗️ **Gaining Clarity on Organizational Structure**

Especially in a post-COVID world of hybrid work, it's easy to lose sight of the bigger picture. Working with a different team helped me better understand Spotify's evolving organizational structure—something that's otherwise hard to grasp in remote settings.

---

### 🧠 **Exploring Diverse Problems and Platforms**

Embedding also breaks down platform silos. Imagine an iOS engineer who wants to dive into backend systems or explore data workflows. Embedding offers a low-risk, high-reward opportunity to do so—often unlocking new passions and career trajectories.

---

### 💡 **Knowledge Transfer for Team Enrichment**

While embedding boosts personal growth, it also benefits your home team. Engineers often return with fresh insights—from better release processes to more efficient team rituals—that can be shared and implemented. This cross-pollination leads to collective growth.

---

### 🔍 **Discovering Your Ideal Team**

Sometimes, embedding helps you find your true calling. Working on a different problem with a new team might reveal that it's a better fit for your skills and interests. At Spotify, this transition is supported rather than discouraged, and it also gives managers clearer insights into whether the fit is mutual.

---

### 🌱 **Investing in Internal Talent**

In the long run, investing in internal talent yields massive organizational gains. It builds a resilient, versatile workforce and reduces the "bus factor" (risk of losing critical knowledge when someone leaves). Spotify's approach cultivates a thriving talent ecosystem rather than relying solely on external hires.

---

### 🎯 **Diverse Feedback for Dynamic Growth**

Embedding also exposes you to new forms of feedback—often from people who view your work through a different lens. This accelerates your growth, helping you adapt, reflect, and improve from varied perspectives.

---

### 😀 **Boosting Employee Satisfaction**

When companies prioritize internal mobility, employees feel seen and supported. It signals trust and investment in their growth—leading to higher engagement and retention.

---

## **A Call to Action for Companies**

Embedding should not be confined to isolated teams or occasional exceptions. For it to truly work, it needs to be embraced **company-wide**. Leaders should invest in building internal tooling to surface embedding opportunities and actively champion the practice across the organization.

In my opinion, embedding is a **win-win** for both engineers and the company. It nurtures a growth mindset, builds a more resilient organization, and fosters a culture of learning and adaptability.

If you're curious to dive deeper into Spotify's take on internal mobility, I highly recommend reading Spotify's blog post on embedding—a detailed look into how they've thoughtfully implemented this strategy.

---

## **In Closing**

From my personal experience, very few companies truly champion internal mobility the way Spotify does. If you know of other organizations excelling in this area, I'd love to hear from you—drop a comment and share your insights! 🗨️

A heartfelt shoutout to all the companies investing in internal growth and building cultures that prioritize learning, exploration, and adaptability. 👏 Your commitment is shaping the future of engineering culture. 🌟

---

*This post is part of my series on team dynamics and career growth. Check out my other posts on mobile engineering, developer experience, and building better teams.*
    `
  },
  'kotlin-multiplatform-vs-flutter': {
    slug: 'kotlin-multiplatform-vs-flutter',
    title: 'Kotlin Multiplatform vs Flutter: A Simple Comparison for Android Developers',
    excerpt: 'A practical comparison between Kotlin Multiplatform and Flutter for Android developers. Learn when to choose each technology, their strengths, weaknesses, and real-world considerations.',
    image: '/blog-images/kmp.png',
    category: 'Tech',
    readTime: '6 min read',
    publishDate: 'April 1, 2025',
    author: 'Asif Shaikh',
    content: `
# Kotlin Multiplatform vs Flutter: A Simple Comparison for Android Developers

As an Android developer, you've probably heard of Kotlin Multiplatform (KMP) and Flutter as options for building cross-platform apps. Both aim to help us write code once and run it on both Android and iOS — but they go about it in very different ways.

If you're wondering which one might be a better fit for your next project, here's a simple breakdown of the core differences between them, with a focus on what makes sense for us Android folks.

---

## 🌱 1. **Language and Ecosystem**

**Kotlin Multiplatform (KMP):**  
You use **Kotlin** — the same language you already love and use daily. KMP lets you share code (like business logic, networking, and data layers) between Android and iOS, but keeps the UI platform-specific.  
➕ Big win: You don't need to leave the Android/Kotlin ecosystem.  
➖ You still have to write native UI for iOS (Swift/SwiftUI), which means knowing or learning some iOS development.

**Flutter:**  
Uses **Dart**, which is a different language from what most Android devs are used to. Flutter is all about writing **everything** (UI + logic) in one codebase.  
➕ The UI looks and behaves the same on both platforms.  
➖ You'll be working outside the traditional Android view system (no XML, no Jetpack Compose).

---

## 🧱 2. **UI Development**

**KMP:**  
No shared UI. You build UI separately for Android (in Jetpack Compose or XML) and iOS (in SwiftUI/UIKit).  
➕ Native look and feel, best performance.  
➖ Double the work on the UI layer.

**Flutter:**  
UI is built with Flutter widgets, which are rendered using Flutter's own engine.  
➕ Fast development with hot reload, lots of pre-built widgets.  
➖ Not native — can feel a bit off if not styled carefully.

---

## 🔄 3. **Interoperability**

**KMP:**  
Great interop with Android because it's Kotlin. iOS interop is also strong thanks to the Kotlin/Native compiler, but needs some setup.  
➕ On Android, it feels just like writing normal code.  
➖ On iOS, there's a learning curve around how shared code maps to Swift.

**Flutter:**  
Talks to native code using "platform channels". You can use Kotlin/Swift to write platform-specific code when needed.  
➕ One codebase.  
➖ Interop requires writing boilerplate for communication between Dart and platform code.

---

## 🚀 4. **Tooling and Performance**

**KMP:**  
Uses Android Studio/IntelliJ and Xcode for respective platforms.  
Performance is native since you're using platform-native code.  
➕ Best for apps where performance matters, like real-time features or hardware interactions.

**Flutter:**  
Excellent tooling (DevTools, hot reload, UI inspector).  
Performance is usually very good, but not "true native".  
➕ Best for fast prototyping, design-heavy apps.

---

## 🎯 Final Thoughts

If you're an Android developer:

- Choose **KMP** if you want to **stay in the Kotlin world**, keep using Android's native tools, and are okay writing some Swift for iOS UI. It's a great choice for teams who already have Android and iOS devs and want to unify business logic.

- Choose **Flutter** if you want to **write everything once**, including UI, and are okay stepping outside of the native Android ecosystem. Flutter shines for startups, design-focused apps, or when you're working solo.

Both are powerful — it just depends on what kind of app you're building and how much native control you need.

---

💬 _Have you tried KMP or Flutter yet? I'd love to hear your experience — especially from other Android developers navigating this choice!_

---

*This post is part of my series on mobile development technologies. Check out my other posts on Android development, team building, and career growth.*
    `
  },
  'open-closed-principle': {
    slug: 'open-closed-principle',
    title: 'Understanding the Open-Closed Principle in Software Engineering',
    excerpt: 'Dive into the Open-Closed Principle (OCP) from SOLID principles. Learn how to design code that\'s open for extension but closed for modification, with practical Kotlin examples for Android development.',
    image: '/blog-images/OCP.png',
    category: 'Software Design',
    readTime: '8 min read',
    publishDate: 'May 14, 2025',
    author: 'Asif Shaikh',
    content: `
# Understanding the Open-Closed Principle in Software Engineering

Welcome back to our series on the SOLID principles of software engineering! In Part 1, we explored the **Single Responsibility Principle**, learning how each class should have just one job to keep our code clean and manageable.

Today, in Part 2, we're diving into the **Open-Closed Principle (OCP)**, a super useful idea that makes our code flexible and easy to grow, like a LEGO set that you can keep adding to without breaking what's already built.

We'll explain OCP in simple, everyday terms, use **Kotlin** (a popular language for Android development) for examples, and even sprinkle in some Android-inspired scenarios to make it relatable.

So let's get started 🚀

## What is the Open-Closed Principle?

The Open-Closed Principle sounds fancy, but it's actually pretty straightforward.

It says:

> **"Software entities (like classes, modules, or functions) should be _open for extension_ but _closed for modification_."**

Let's break that down:

* **Open for extension**: You can add new features or behaviors to your code easily, like adding a new character to a game.
* **Closed for modification**: You shouldn't have to change the existing code to add those new features, so the original code stays safe and untouched.

Think of it like a smartphone. When you want a new feature, like a cool camera filter, you download a new app or update (extension). You don't need to crack open the phone and rewire its circuits (modification). OCP helps us design code that works the same way—new stuff can be added without messing with what's already there.

## Why Does OCP Matter?

Imagine you're building an Android app, like a to-do list app. Users love it, but they start asking for new features, like reminders or color-coded tasks. If you have to rewrite big chunks of your original code every time you add something new, you might accidentally break the app, frustrate users, or spend hours fixing bugs. OCP helps you avoid this by making your code flexible and ready for growth.

Following OCP means:

* Your app can handle new features without breaking.
* It's easier to maintain and test.
* You save time and avoid headaches when requirements change (and they _always_ change!).

## A Real-World Example: The To-Do List App

Let's say you're building a to-do list app for Android. You have a feature that displays tasks in a simple list. But now, users want different ways to display tasks—like a grid view or a calendar view. Without OCP, you might end up with code that looks like this:

### What's Wrong Here?

\`\`\`kotlin
class TaskDisplay {
    fun displayTasks(tasks: List<Task>, viewType: String) {
        when (viewType) {
            "list" -> displayAsList(tasks)
            "grid" -> displayAsGrid(tasks)
            "calendar" -> displayAsCalendar(tasks)
            else -> displayAsList(tasks)
        }
    }
    
    private fun displayAsList(tasks: List<Task>) { /* ... */ }
    private fun displayAsGrid(tasks: List<Task>) { /* ... */ }
    private fun displayAsCalendar(tasks: List<Task>) { /* ... */ }
}
\`\`\`

Every time you want to add a new display type (say, a "kanban" view), you have to _modify_ the \`TaskDisplay\` class and add another \`if\` statement. This:

* Makes the code messy and hard to read.
* Risks breaking existing display types if you make a mistake.
* Violates OCP because the class isn't _closed for modification_.

### Fixing It with OCP

To follow OCP, we can redesign the code so it's _open for extension_ (you can add new display types) but _closed for modification_ (you don't change the original code). Here's how we can do it using Kotlin and an interface:

\`\`\`kotlin
interface TaskDisplay {
    fun display(tasks: List<Task>)
}

class ListDisplay : TaskDisplay {
    override fun display(tasks: List<Task>) {
        // Display tasks as a list
    }
}

class GridDisplay : TaskDisplay {
    override fun display(tasks: List<Task>) {
        // Display tasks as a grid
    }
}

class CalendarDisplay : TaskDisplay {
    override fun display(tasks: List<Task>) {
        // Display tasks as a calendar
    }
}

class TaskManager(private val display: TaskDisplay) {
    fun showTasks(tasks: List<Task>) {
        display.display(tasks)
    }
}
\`\`\`

### How Does This Follow OCP?

* **Open for extension**: Want a new display type, like a kanban view? Just create a new class (e.g., \`KanbanDisplay\`) that implements \`TaskDisplay\`. No need to touch the existing code.
* **Closed for modification**: The \`TaskManager\` and existing display classes stay unchanged when you add new display types.

Here's how you'd use it:

\`\`\`kotlin
val listDisplay = ListDisplay()
val taskManager = TaskManager(listDisplay)
taskManager.showTasks(tasks)
\`\`\`

Now, adding a new \`KanbanDisplay\` is as simple as:

\`\`\`kotlin
class KanbanDisplay : TaskDisplay {
    override fun display(tasks: List<Task>) {
        // Display tasks as a kanban board
    }
}

// Usage
val kanbanDisplay = KanbanDisplay()
val taskManager = TaskManager(kanbanDisplay)
\`\`\`

No changes to \`TaskManager\` or other classes needed!

## Another Android Example: Notifications

Let's look at another Android example to drive this home. Suppose your app sends notifications to users, like reminders for tasks. Initially, you only support push notifications, but later you want to add email notifications and SMS notifications.

### Without OCP

You might write something like:

\`\`\`kotlin
class NotificationSender {
    fun sendNotification(message: String, type: String) {
        when (type) {
            "push" -> sendPushNotification(message)
            "email" -> sendEmailNotification(message)
            "sms" -> sendSMSNotification(message)
        }
    }
    
    private fun sendPushNotification(message: String) { /* ... */ }
    private fun sendEmailNotification(message: String) { /* ... */ }
    private fun sendSMSNotification(message: String) { /* ... */ }
}
\`\`\`

Again, adding a new notification type (like in-app notifications) means modifying the \`NotificationSender\` class, which violates OCP.

### With OCP

Here's a better way:

\`\`\`kotlin
interface Notification {
    fun send(message: String)
}

class PushNotification : Notification {
    override fun send(message: String) {
        // Send push notification
    }
}

class EmailNotification : Notification {
    override fun send(message: String) {
        // Send email notification
    }
}

class SMSNotification : Notification {
    override fun send(message: String) {
        // Send SMS notification
    }
}

class NotificationManager(private val notification: Notification) {
    fun notifyUser(message: String) {
        notification.send(message)
    }
}
\`\`\`

Now, if you want to add an in-app notification, just create a new class:

\`\`\`kotlin
class InAppNotification : Notification {
    override fun send(message: String) {
        // Show in-app notification
    }
}

// Usage
val inAppNotification = InAppNotification()
val notificationManager = NotificationManager(inAppNotification)
\`\`\`

The \`NotificationManager\` doesn't need any changes, and your app can keep growing with new notification types.

## Tips for Applying OCP in Your Code

1. **Use Interfaces or Abstract Classes**: They let you define a contract (like \`TaskDisplay\` or \`Notification\`) that new classes can follow without changing existing code.
2. **Think About Future Features**: When designing a feature, ask, "What might users want next?" Design your code to make those additions easy.
3. **Keep It Simple**: Don't overcomplicate things with too many interfaces. Use OCP where you expect change, like features that might expand (e.g., display types, notifications).
4. **Test Your Extensions**: Since you're adding new classes, make sure they work as expected without breaking the rest of the app.

## Wrapping Up

The Open-Closed Principle is like building a house with extra rooms ready for guests—you can welcome new features without tearing down walls. By designing your code to be _open for extension_ and _closed for modification_, you make your Android apps (or any software) easier to maintain, grow, and test.

In our to-do list and notification examples, we saw how using interfaces in Kotlin lets us add new display types or notification methods without touching the original code. This saves time, reduces bugs, and keeps your app flexible for whatever users dream up next.

Stay tuned for Part 3 of our SOLID series, where we'll explore the **Liskov Substitution Principle**! In the meantime, try applying OCP to your next Android project. Have you used OCP before, or do you have a feature in mind where it could help? Let me know in the comments!

Happy coding, and see you in the next post!

---

_This blog post is part of a series on SOLID principles. Check out Part 1: Single Responsibility Principle if you missed it!_
    `
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-t-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{post.publishDate}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-500 text-sm">Mobile Engineer</p>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <BlogContent content={post.content} />
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-gray-600 text-sm">
                    Published on {post.publishDate} by {post.author}
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">More Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/blogs/spotify-mobile-scale"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src="/blog-images/spotify-mobile.jpg"
                  alt="Building Mobile Apps at Scale: Lessons from Spotify"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  Mobile Engineering
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                  Building Mobile Apps at Scale: Lessons from Spotify
                </h3>
                <p className="text-gray-600 text-sm">
                  Sharing insights from my time at Spotify, where I worked on the Premium experience for Asian markets.
                </p>
              </div>
            </Link>

            <Link
              href="/blogs/developer-experience-matters"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src="/blog-images/developer-experience.jpg"
                  alt="Developer Experience: Why It Matters More Than You Think"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  Developer Experience
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                  Developer Experience: Why It Matters More Than You Think
                </h3>
                <p className="text-gray-600 text-sm">
                  Exploring how improving developer workflows can dramatically impact team productivity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
