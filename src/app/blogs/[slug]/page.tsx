import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
    image: '/blog-images/code-reviews.jpg',
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
  'kotlin-multiplatform-vs-flutter': {
    slug: 'kotlin-multiplatform-vs-flutter',
    title: 'Kotlin Multiplatform vs Flutter: A Simple Comparison for Android Developers',
    excerpt: 'A practical comparison between Kotlin Multiplatform and Flutter for Android developers. Learn when to choose each technology, their strengths, weaknesses, and real-world considerations from my experience.',
    image: '/blog-images/kotlin-flutter-comparison.jpg',
    category: 'Mobile Development',
    readTime: '10 min read',
    publishDate: 'April 1, 2025',
    author: 'Asif Shaikh',
    content: `
# Kotlin Multiplatform vs Flutter: A Simple Comparison for Android Developers

Picture this: You're an Android developer who's been building native apps for years. You know Kotlin like the back of your hand, you're comfortable with Android's ecosystem, and you've shipped several successful apps. But now your company wants to expand to iOS, and suddenly you're faced with a choice that could define your next few years: Kotlin Multiplatform or Flutter?

I've been in this exact situation, and let me tell you—it's not an easy decision. Both technologies promise to solve the same problem (write once, run everywhere), but they approach it from completely different angles.

After working with both technologies and seeing them in action at different companies, I want to share my honest take on this debate. No marketing fluff, no biased opinions—just real experiences from someone who's been in the trenches.

## The Context: Why This Decision Matters

Let me start with a story that might sound familiar.

A few years ago, I was working at a startup where we had a successful Android app with a growing user base. The iOS team was struggling to keep up with feature parity, and management was getting frustrated with the development speed. Sound familiar?

The solution seemed obvious: cross-platform development. But which path to take? That's where things got interesting.

## Kotlin Multiplatform: The Native Developer's Dream

If you're an Android developer, Kotlin Multiplatform feels like coming home. You're still writing Kotlin, you're still using familiar tools, and you're still thinking in terms of native platforms.

### What I Love About Kotlin Multiplatform

**Familiar Territory**: When I first tried Kotlin Multiplatform, it felt like putting on a comfortable pair of shoes. The syntax was familiar, the tooling was similar, and I could leverage my existing Android knowledge.

**True Native Performance**: Unlike Flutter's widget-based approach, Kotlin Multiplatform lets you write platform-specific UI code. This means you get the full performance of native components and can use platform-specific features without workarounds.

**Gradual Adoption**: One of the biggest advantages is that you don't have to rewrite your entire app. You can start by sharing business logic and gradually move more code to the shared module.

### The Reality Check

But here's where things get interesting. While Kotlin Multiplatform sounds perfect on paper, the reality is more nuanced.

**Learning Curve for iOS**: Even though you're writing Kotlin, you still need to understand iOS development concepts. You need to know about iOS lifecycle, memory management, and platform-specific APIs.

**Limited Ecosystem**: Compared to Flutter's mature ecosystem, Kotlin Multiplatform is still relatively new. You might find yourself implementing features that Flutter developers get out of the box.

**Team Dynamics**: If your team is primarily Android developers, you'll need to invest in iOS training or hire iOS developers who are willing to learn Kotlin.

## Flutter: The Cross-Platform Powerhouse

Flutter takes a completely different approach. Instead of trying to bridge native platforms, it creates its own rendering engine and widget system.

### What Makes Flutter Compelling

**True Cross-Platform**: With Flutter, you write one codebase and it runs on multiple platforms. The UI looks and behaves consistently across platforms, which can be a huge advantage for brand consistency.

**Rapid Development**: Flutter's hot reload is genuinely impressive. You can see changes instantly, which makes the development cycle much faster.

**Rich Ecosystem**: Flutter has been around longer and has a more mature ecosystem. You'll find packages for almost everything you need.

**Single Language**: You only need to know Dart, which is relatively easy to learn if you're coming from Java or Kotlin.

### The Trade-offs

But Flutter isn't without its challenges.

**Performance Considerations**: While Flutter is fast, it's not as fast as native code. For apps that require maximum performance, this can be a concern.

**Platform Integration**: Accessing platform-specific features can be more complex in Flutter. You might need to write platform channels or use third-party packages.

**Learning Curve**: Even though Dart is similar to other languages, you still need to learn Flutter's widget system and development patterns.

## My Real-World Experience

Let me share two different experiences that shaped my perspective.

### Experience 1: The Startup Dilemma

At the startup I mentioned earlier, we chose Kotlin Multiplatform. Here's what happened:

**The Good**: We could share about 70% of our business logic between Android and iOS. The Android developers felt comfortable, and we could leverage existing knowledge.

**The Challenges**: Our iOS developer had to learn Kotlin, which took time. We also found ourselves implementing a lot of platform-specific code, which reduced the benefits of code sharing.

**The Result**: We shipped both apps, but the development time wasn't as dramatically reduced as we had hoped.

### Experience 2: The Flutter Experiment

Later, I worked on a project where we chose Flutter. Here's what I learned:

**The Good**: Development was incredibly fast. The hot reload made iteration cycles much shorter, and we could ship features quickly.

**The Challenges**: We had to rewrite our entire app, which was a significant investment. We also had to learn Flutter's patterns and deal with some performance issues.

**The Result**: We shipped faster, but the app felt less "native" on both platforms.

## The Decision Framework

Based on my experiences, here's how I think about this decision:

### Choose Kotlin Multiplatform When:

- Your team is primarily Android developers
- You have an existing Android app that you want to extend to iOS
- Performance is critical
- You need deep platform integration
- You're comfortable with gradual adoption

### Choose Flutter When:

- You're starting from scratch
- You want maximum code sharing
- Development speed is more important than platform-specific optimizations
- You have a small team that can learn new technologies
- You prioritize consistency across platforms

## The Honest Truth

Here's what I wish someone had told me before I made these decisions:

**There's no perfect solution**. Both technologies have trade-offs, and the "right" choice depends on your specific situation.

**Team dynamics matter more than technology**. A great team can make any technology work, but a struggling team will struggle regardless of the tools.

**The ecosystem is still evolving**. Both Kotlin Multiplatform and Flutter are rapidly evolving, so what's true today might not be true tomorrow.

## My Recommendation

If I had to make this decision again today, here's what I would do:

1. **Start with your team**: What are your team's strengths? What are they willing to learn?

2. **Consider your timeline**: Do you need to ship quickly, or do you have time to invest in learning new technologies?

3. **Think about your app**: What are your performance requirements? How important is platform-specific functionality?

4. **Plan for the future**: Where do you see your app in 2-3 years? What platforms might you want to support?

## The Bottom Line

Both Kotlin Multiplatform and Flutter are excellent technologies that can help you build cross-platform apps. The choice between them isn't about which one is "better"—it's about which one is better for your specific situation.

If you're an Android developer looking to expand to iOS, Kotlin Multiplatform might feel more comfortable. If you're starting fresh and want maximum code sharing, Flutter might be the way to go.

The most important thing is to make an informed decision based on your team, your requirements, and your constraints. And remember—you can always change your mind later. The technology landscape is constantly evolving, and what works today might not work tomorrow.

What's your experience with cross-platform development? Have you tried either of these technologies? I'd love to hear your thoughts and continue this conversation!

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
              className="object-cover"
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
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/\n/g, '<br>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                    .replace(/```kotlin\n([\s\S]*?)\n```/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-kotlin">$1</code></pre>')
                    .replace(/```kotlin\n([\s\S]*?)\n```/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-kotlin">$1</code></pre>')
                    .replace(/```\n([\s\S]*?)\n```/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>')
                    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
                    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-6">$1</h2>')
                    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
                    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">$1</blockquote>')
                }}
              />
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
