import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, Clock, User, Tag, ArrowRight,
  BookOpen, Target, CheckCircle, AlertCircle,
  TrendingUp, Globe, Award, MessageSquare,
  BarChart, Clock as ClockIcon, DollarSign
} from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";

// Hero image
const HERO_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

// Blog metadata
const blogMeta = {
  title: "IELTS vs PTE: Which English Test is Better for Nepali Students?",
  excerpt: "A comprehensive comparison to help Nepali students choose between IELTS and PTE Academic for study abroad applications.",
  author: "Ramesh Thapa",
  publishedDate: "December 20, 2024",
  readTime: "8 min read",
  category: "Exam Guide"
};

export default function IeltsVsPteBlogPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Simple Hero */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Student taking English language test"
            fill
            className="object-cover brightness-75"
            priority
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative h-full flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white w-full">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4" />
                <span className="font-medium">{blogMeta.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {blogMeta.title}
              </h1>

              <p className="text-lg opacity-90 mb-6">
                {blogMeta.excerpt}
              </p>

              <div className="flex items-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogMeta.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogMeta.publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogMeta.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Introduction */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              As a Nepali student planning to study abroad, one of the first major decisions you'll face is choosing 
              which English proficiency test to take. For years, IELTS has been the default choice, but in recent times, 
              PTE Academic has emerged as a strong contender. Both tests serve the same purpose—proving your English 
              language ability to universities and immigration authorities—but they differ significantly in format, 
              scoring, and approach.
            </p>
            
            <p className="text-gray-700 mb-6">
              Having guided hundreds of Nepali students through this decision, I've seen how the right choice can 
              significantly impact your test preparation experience and final scores. This guide will help you 
              understand both tests from a Nepali student's perspective, so you can make an informed decision that 
              aligns with your strengths and study abroad goals.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-6 border-l-4 border-red-400">
              <p className="text-gray-800 font-semibold">
                💡 <span className="text-red-600">Important:</span> Both IELTS and PTE are accepted by universities in 
                Australia, New Zealand, the UK, and Canada. The USA accepts both but has specific preferences by institution.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Understanding the Tests */}
        <AnimatedSection animation="fade-up" delay={0.1} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Two Tests</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">IELTS: The Traditional Choice</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                IELTS (International English Language Testing System) has been the gold standard for English testing 
                for decades. It's a paper-based or computer-based test that assesses your English skills through four 
                sections: Listening, Reading, Writing, and Speaking. What makes IELTS unique is its speaking test, 
                which involves a face-to-face interview with a certified examiner.
              </p>
              
              <p className="text-gray-700">
                For Nepali students, IELTS feels familiar because it follows a traditional testing format. The writing 
                sections require essay-style answers, and the reading comprehension follows patterns similar to what 
                you've encountered in your academic journey. The face-to-face speaking test can be both an advantage 
                and a challenge—it allows for natural conversation but can be intimidating for students who get nervous 
                in interview situations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">PTE Academic: The Modern Alternative</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                PTE Academic (Pearson Test of English) is a fully computer-based test that uses artificial intelligence 
                to assess your English skills. It also covers the four language skills but in a more integrated way. 
                For example, you might need to listen to a lecture and then summarize it in writing, or read a passage 
                and then speak about it.
              </p>
              
              <p className="text-gray-700">
                The most significant difference for Nepali students is that PTE's speaking section is recorded on a 
                computer—there's no human interviewer. This can be less intimidating, but it requires comfort with 
                speaking into a microphone in a room with other test-takers doing the same. The test format feels more 
                like a technical assessment than a traditional language test, which can be advantageous for students 
                who are comfortable with computers and standardized testing formats.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Differences */}
        <AnimatedSection animation="fade-up" delay={0.2} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Differences for Nepali Students</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-red-600" />
                Speaking Test Format
              </h3>
              
              <p className="text-gray-700 mb-4">
                This is where the tests differ most dramatically. IELTS requires you to have a 11-14 minute conversation 
                with a human examiner. The advantage is that if you don't understand a question, you can ask for 
                clarification. The examiner can also adapt to your pace and level, making the experience more natural.
              </p>
              
              <p className="text-gray-700">
                PTE, on the other hand, records your responses to computer prompts. You'll speak into a microphone, 
                and your responses are scored by AI. This can be less stressful since there's no human judgment in the 
                moment, but it requires you to manage your time perfectly—if you pause too long, the recording stops. 
                Many Nepali students find PTE's speaking section more predictable once they master the timing.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                <BarChart className="w-5 h-5 text-blue-600" />
                Scoring System
              </h3>
              
              <p className="text-gray-700 mb-4">
                IELTS uses a band score system from 0 to 9, with half-band increments. Each section gets an individual 
                band score, and these are averaged for an overall band score. Universities typically require a minimum 
                overall score, often 6.5 or 7.0, with minimum scores in each section.
              </p>
              
              <p className="text-gray-700">
                PTE uses a granular scoring system from 10 to 90 points. Because it's computer-scored, the results are 
                extremely consistent. Many students appreciate that PTE provides a detailed score report showing areas 
                for improvement. For Nepali students who need very specific scores (like 65 points exactly for Australian 
                immigration), PTE's precise scoring can be advantageous.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-purple-600" />
                Results and Availability
              </h3>
              
              <p className="text-gray-700 mb-4">
                IELTS results typically take 13 days for the paper-based test and 3-5 days for the computer-based test. 
                Test dates are available frequently in Kathmandu and Pokhara, but you need to book well in advance 
                during peak seasons.
              </p>
              
              <p className="text-gray-700">
                PTE results come much faster—usually within 48 hours. Test centers in Nepal offer more flexible scheduling, 
                often with multiple sessions per day. This speed can be crucial if you're working against university 
                application deadlines. For students who need to retake the test, PTE's quick turnaround means you can 
                improve your score and resubmit applications much faster.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Which Test to Choose */}
        <AnimatedSection animation="fade-up" delay={0.3} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Test Should You Choose?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              The right choice depends on your individual strengths, weaknesses, and study abroad goals. Here's how 
              to think about this decision:
            </p>
            
            <div className="space-y-6 my-8">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  Choose IELTS if:
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You're comfortable with traditional pen-and-paper tests and face-to-face interviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your writing skills are strong, especially for essay-style answers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You prefer a human examiner who can adapt to your speaking pace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You're applying to universities that explicitly prefer IELTS or have long-standing IELTS requirements</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Choose PTE if:
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You're comfortable with computers and typing quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You get nervous in face-to-face speaking interviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You need fast results for tight application deadlines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You're aiming for Australian immigration where PTE is widely accepted and preferred by many</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Many Nepali students find that their performance varies significantly between the two tests. I always 
              recommend taking a practice test for both before making a final decision. You might discover that 
              you naturally perform better on one format, regardless of which test you initially thought would suit you.
            </p>
          </div>
        </AnimatedSection>

        {/* Preparation Tips */}
        <AnimatedSection animation="fade-up" delay={0.4} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparation Strategies for Nepali Students</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Preparing for either test requires dedication, but the strategies differ. Based on my experience with 
              Nepali students, here are the most effective approaches:
            </p>
            
            <div className="space-y-6 my-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">For IELTS Preparation</h3>
                  <p className="text-gray-700">
                    Focus on developing your essay writing skills and expanding your vocabulary for academic contexts. 
                    Practice speaking English regularly with friends or tutors to build confidence for the face-to-face 
                    interview. Listen to BBC or other British English broadcasts to familiarize yourself with different 
                    accents. Work on your handwriting legibility if taking the paper-based test.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">For PTE Preparation</h3>
                  <p className="text-gray-700">
                    Practice typing quickly and accurately—you'll need to type your writing responses. Get comfortable 
                    speaking clearly into a microphone without long pauses. Use the official PTE practice software to 
                    familiarize yourself with the test format and timing. Work on integrated skills, like listening and 
                    then speaking, as many PTE questions combine multiple skills.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-6 my-8 border border-red-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Common Challenges for Nepali Students
              </h3>
              
              <p className="text-gray-700 mb-4">
                Many Nepali students struggle with the writing sections of both tests, particularly with structuring 
                academic essays and using formal vocabulary. The speaking sections present different challenges: 
                IELTS students often feel nervous about the interview, while PTE students struggle with speaking 
                clearly into a microphone while managing strict time limits.
              </p>
              
              <p className="text-gray-700">
                Listening comprehension can also be challenging, especially with different English accents. I recommend 
                students expose themselves to various accents—Australian, British, American, Canadian—through movies, 
                podcasts, and news broadcasts.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Cost and Logistics */}
        <AnimatedSection animation="fade-up" delay={0.5} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost and Practical Considerations</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Both tests represent a significant investment for Nepali students, so it's important to consider the 
              practical aspects:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-bold text-gray-900">IELTS Costs in Nepal</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The IELTS test fee in Nepal is approximately NPR 26,500 for both Academic and General Training versions. 
                  Additional costs may include preparation materials, coaching classes, and transportation to test centers.
                </p>
                <p className="text-gray-700 text-sm">
                  Test centers are available in Kathmandu, Pokhara, Chitwan, and other major cities, but availability 
                  can be limited during peak application seasons.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">PTE Costs in Nepal</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  PTE Academic costs around NPR 25,000 in Nepal. The test is only available in computer-based format, 
                  and test centers are primarily in Kathmandu with limited availability in other cities.
                </p>
                <p className="text-gray-700 text-sm">
                  The advantage is more frequent test dates and faster results, which can be valuable if you need to 
                  retake the test or are working with tight deadlines.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <p className="text-yellow-800">
                <span className="font-bold">Budget Tip:</span> Many test preparation resources are available online for 
                free or at low cost. Official practice materials from both IELTS and PTE are the most reliable, but 
                there are also excellent community resources created by previous test-takers.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* University Acceptance */}
        <AnimatedSection animation="fade-up" delay={0.6} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">University Acceptance and Recognition</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Both tests are widely accepted, but there are some important nuances that Nepali students should understand:
            </p>
            
            <div className="space-y-6 my-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IELTS Acceptance</h3>
                  <p className="text-gray-700">
                    IELTS is accepted by virtually all universities in English-speaking countries and by many 
                    institutions worldwide. It's particularly strong in the UK, where it's often the preferred test. 
                    For Nepali students applying to traditional universities with long-established international 
                    student programs, IELTS is almost universally accepted without question.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">PTE Acceptance</h3>
                  <p className="text-gray-700">
                    PTE Academic is accepted by thousands of institutions globally, with particularly strong acceptance 
                    in Australia and New Zealand. In fact, for Australian student visas and immigration, PTE is often 
                    preferred due to its quick results and computer-based format. However, some older or more traditional 
                    institutions may still have a preference for IELTS, so it's crucial to check each university's 
                    specific requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-6 my-8 border border-red-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-purple-600" />
                Important Verification Step
              </h3>
              
              <p className="text-gray-700">
                Before committing to either test, always check the specific requirements of every university you're 
                applying to. Visit their official websites or contact their admissions offices directly. Some programs 
                may have minimum scores for individual sections, while others only care about the overall score. A few 
                specialized programs (like some law or medicine courses) may have specific test preferences.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Recommendation */}
        <AnimatedSection animation="fade-up" delay={0.7} className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Making Your Decision
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                After working with countless Nepali students on this decision, here's my straightforward advice: 
                <span className="font-semibold text-red-600"> Take practice tests for both.</span> Many coaching centers 
                in Nepal offer diagnostic tests for both IELTS and PTE. Your performance on these practice tests will 
                give you the clearest indication of which test format suits you better.
              </p>
              
              <p className="text-gray-700 mb-6">
                Consider your timeline too. If you have months to prepare and prefer traditional testing, IELTS might 
                be your choice. If you need results quickly for an upcoming application deadline, PTE's faster turnaround 
                could be decisive.
              </p>
              
              <p className="text-gray-700">
                Remember that both tests are valid measures of English proficiency. The "better" test is the one where 
                <span className="font-semibold text-blue-600"> you can achieve the score you need</span>. Many students 
                successfully take both tests and submit the higher score. The key is to understand your own strengths 
                and choose the test that allows you to demonstrate your English ability most effectively.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fade-up" delay={0.8} className="mb-12">
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Still unsure which test is right for you? Our experienced counselors can help you 
              assess your strengths and recommend the best path forward.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Get Personalized Advice
            </Link>
          </div>
        </AnimatedSection>

        {/* Next Article */}
        {/* <AnimatedSection animation="fade-up" delay={0.9} className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Continue reading</p>
              <h3 className="text-lg font-bold text-gray-900">
                How to Improve Your English for Study Abroad: Tips for Nepali Students
              </h3>
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <span>Read next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection> */}
      </div>
    </article>
  );
}