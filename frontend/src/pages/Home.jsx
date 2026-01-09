import DailySummary from '../components/DailySummary'
import GlassCard from '../components/GlassCard'
import Tasks from '../components/Tasks'
import Timer from '../components/Timer'

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_50px_rgba(15,23,42,0.35)]">
    <h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
    <p className="text-sm leading-relaxed text-slate-300">{children}</p>
  </div>
)

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Welcome</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">OpenLife (Daily Workflow & Time Management)</h1>
        <p className="mt-2 text-sm text-slate-200">
          A beginner-friendly, open-source workspace where you can plan your day, protect focus time, and learn how to build React
          components alongside the community.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="What OpenLife is">
          OpenLife is a simple dashboard starter for mapping your day. You get clear sections for tasks, a timer, and a daily recap
          you can extend with your own ideas.
        </Card>
        <Card title="Why time awareness matters">
          Seeing where your time goes helps you stay calm and focused. Even a small timer or checklist can reveal patterns you can
          improve each week.
        </Card>
        <Card title="How beginners can contribute">
          Start by editing the placeholder components below. Swap the text, add inputs, and try new layouts. Small pull requests are
          perfect here.
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Tasks />
        <Timer />
        <DailySummary />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
        <p className="font-semibold text-white">Next steps for beginners</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pick one placeholder above and add a tiny improvement.</li>
          <li>Use Tailwind classes to style buttons, inputs, or cards.</li>
          <li>Share your change as a pull request and ask for feedback.</li>
        </ul>
        {/* BEGINNER: Add your own quick-start steps or learning resources here */}
      </div>

      <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-6 text-sm text-slate-200">
  <h2 className="text-xl font-bold text-emerald-200 mb-2">How to Contribute</h2>
  <p className="text-slate-400 mb-6 leading-relaxed">
    This project is designed for beginners to learn the professional open-source workflow. Follow these detailed steps to make your first contribution.
  </p>

      <div className="space-y-8">
        {/* Step 1: Forking */}
        <div className="relative pl-8 border-l border-emerald-500/30">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <h3 className="font-bold text-white text-base">1. Fork & Understand</h3>
          <p className="mt-1 text-slate-400">
            Click the <span className="text-emerald-300 font-semibold underline">'Fork'</span> button at the top-right. This creates a personal "sandbox" copy of this project on your GitHub account, so you can experiment safely without breaking the original code.
          </p>
        </div>
    
        {/* Step 2: Local Setup */}
        <div className="relative pl-8 border-l border-emerald-500/30">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <h3 className="font-bold text-white text-base">2. Clone & Sync</h3>
          <p className="mt-1 text-slate-400">Bring your copy to your computer and set up the connection to the original project:</p>
          <div className="mt-3 rounded-lg bg-black/40 p-3 font-mono text-[11px] text-emerald-300/90 border border-white/5">
            <p>git clone https://github.com/YOUR_USERNAME/OpenLife.git</p>
            <p className="text-slate-500"># Move into the folder and install tools</p>
            <p>cd OpenLife && npm install</p>
          </div>
        </div>
    
        {/* Step 3: Branching & Working */}
        <div className="relative pl-8 border-l border-emerald-500/30">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <h3 className="font-bold text-white text-base">3. Create a Branch (Important!)</h3>
          <p className="mt-1 text-slate-400">Never work on 'main'. Create a new branch for your feature to keep changes organized:</p>
          <div className="mt-3 rounded-lg bg-black/40 p-3 font-mono text-[11px] text-emerald-300/90 border border-white/5">
            <p>git checkout -b feature/your-feature-name</p>
          </div>
        </div>
    
        {/* Step 4: PR & Review */}
        <div className="relative pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <h3 className="font-bold text-white text-base">4. Push & Pull Request</h3>
          <p className="mt-1 text-slate-400">
            Upload your work and ask for a review. In professional dev, your code is merged only after a 
            <span className="text-emerald-300"> "Reviewer Approval" </span> to ensure quality.
          </p>
          <div className="mt-3 rounded-lg bg-black/40 p-3 font-mono text-[11px] text-emerald-300/90 border border-white/5">
            <p>git add .</p>
            <p>git commit -m "Add: my new feature explanation"</p>
            <p>git push origin feature/your-feature-name</p>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}
