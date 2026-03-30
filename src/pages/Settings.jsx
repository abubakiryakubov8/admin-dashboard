import { useState } from 'react'

const Toggle = ({ enabled, onChange }) => (
    <button
        onClick={() => onChange(!enabled)}
        className={`relative w-10 h-5 rounded-full transition-all duration-200 ${enabled ? 'bg-[#f43f5e]' : 'bg-[#2d1a22]'}`}
    >
        <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${enabled ? 'left-5' : 'left-0.5'}`} />
    </button>
)

export default function Settings() {
    const [notifications, setNotifications] = useState({ email: true, push: false, weekly: true })
    const [privacy, setPrivacy] = useState({ twofa: true, logs: true, public: false })
    const [name, setName] = useState('AbuBakr Yakubov')
    const [email, setEmail] = useState('mcdissian8@gmail.com')

    return (
        <main className="flex-1 overflow-y-auto p-6 space-y-6 max-w-2xl">
            <div>
                <h1 className="text-xl font-bold text-[#fff1f2]">Settings</h1>
                <p className="text-sm text-[#9f5a6e] mt-0.5">Manage your account and preferences.</p>
            </div>

            {/* Profile */}
            <div className="bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10 space-y-4">
                <h2 className="font-semibold text-[#fff1f2]">Profile</h2>
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f43f5e] to-[#9f1239] flex items-center justify-center text-white font-bold text-lg">
                        AY
                    </div>
                    <button className="text-xs font-semibold text-[#f43f5e] hover:text-[#fb7185] transition-colors">
                        Change photo
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-[#9f5a6e] font-medium block mb-1.5">Full name</label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full bg-[#0f0a0e] border border-[#f43f5e]/10 rounded-xl px-3 py-2 text-sm text-[#fff1f2] outline-none focus:border-[#f43f5e]/40 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-[#9f5a6e] font-medium block mb-1.5">Email</label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full bg-[#0f0a0e] border border-[#f43f5e]/10 rounded-xl px-3 py-2 text-sm text-[#fff1f2] outline-none focus:border-[#f43f5e]/40 transition-colors"
                        />
                    </div>
                </div>
                <button className="bg-[#f43f5e] text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-[#e11d48] transition-all shadow-lg shadow-[#f43f5e]/20">
                    Save changes
                </button>
            </div>

            {/* Notifications */}
            <div className="bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10 space-y-4">
                <h2 className="font-semibold text-[#fff1f2]">Notifications</h2>
                {[
                    { key: 'email', label: 'Email notifications', desc: 'Receive updates via email' },
                    { key: 'push', label: 'Push notifications', desc: 'Browser push alerts' },
                    { key: 'weekly', label: 'Weekly digest', desc: 'Summary of activity every Monday' },
                ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between py-2 border-b border-[#f43f5e]/[0.06] last:border-0">
                        <div>
                            <p className="text-sm font-medium text-[#fff1f2]">{label}</p>
                            <p className="text-xs text-[#6b3a4a]">{desc}</p>
                        </div>
                        <Toggle
                            enabled={notifications[key]}
                            onChange={v => setNotifications(prev => ({ ...prev, [key]: v }))}
                        />
                    </div>
                ))}
            </div>

            {/* Security */}
            <div className="bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10 space-y-4">
                <h2 className="font-semibold text-[#fff1f2]">Security & Privacy</h2>
                {[
                    { key: 'twofa', label: 'Two-factor authentication', desc: 'Add an extra layer of security' },
                    { key: 'logs', label: 'Activity logs', desc: 'Track all account activity' },
                    { key: 'public', label: 'Public profile', desc: 'Make your profile visible to all' },
                ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between py-2 border-b border-[#f43f5e]/[0.06] last:border-0">
                        <div>
                            <p className="text-sm font-medium text-[#fff1f2]">{label}</p>
                            <p className="text-xs text-[#6b3a4a]">{desc}</p>
                        </div>
                        <Toggle
                            enabled={privacy[key]}
                            onChange={v => setPrivacy(prev => ({ ...prev, [key]: v }))}
                        />
                    </div>
                ))}
            </div>

            {/* Danger zone */}
            <div className="bg-[#180f16] rounded-2xl p-5 border border-[#9f1239]/40 space-y-3">
                <h2 className="font-semibold text-[#fda4af]">Danger Zone</h2>
                <p className="text-xs text-[#9f5a6e]">These actions are irreversible. Please be certain.</p>
                <div className="flex gap-3 flex-wrap">
                    <button className="text-xs font-semibold px-4 py-2 rounded-xl border border-[#9f1239]/50 text-[#fda4af] hover:bg-[#9f1239]/20 transition-all">
                        Reset all data
                    </button>
                    <button className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#9f1239]/30 text-[#fda4af] hover:bg-[#9f1239]/50 transition-all">
                        Delete account
                    </button>
                </div>
            </div>
        </main>
    )
}