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
  'open-closed-principle': {
    slug: 'open-closed-principle',
    title: 'Understanding the Open-Closed Principle in Software Engineering',
    excerpt: 'Dive into the Open-Closed Principle (OCP) from SOLID principles. Learn how to design code that\'s open for extension but closed for modification, with practical Kotlin examples for Android development.',
    image: '/blog-images/solid-principles.jpg',
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
