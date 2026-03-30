import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

const users = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@forma.io', role: 'Admin', plan: 'Enterprise', status: 'Active', joined: 'Jan 12, 2026', avatar: 'SJ' },
    { id: 2, name: 'David Kim', email: 'david@orbit.co', role: 'Editor', plan: 'Pro', status: 'Active', joined: 'Feb 3, 2026', avatar: 'DK' },
    { id: 3, name: 'Maya Lopes', email: 'maya@velo.io', role: 'Viewer', plan: 'Pro', status: 'Active', joined: 'Feb 18, 2026', avatar: 'ML' },
    { id: 4, name: 'James Carter', email: 'james@stack.dev', role: 'Editor', plan: 'Starter', status: 'Inactive', joined: 'Mar 1, 2026', avatar: 'JC' },
    { id: 5, name: 'Aisha Tanaka', email: 'aisha@nova.ai', role: 'Admin', plan: 'Enterprise', status: 'Active', joined: 'Mar 5, 2026', avatar: 'AT' },
    { id: 6, name: 'Omar Castillo', email: 'omar@build.io', role: 'Viewer', plan: 'Pro', status: 'Active', joined: 'Mar 14, 2026', avatar: 'OC' },
    { id: 7, name: 'Lena Fischer', email: 'lena@work.de', role: 'Editor', plan: 'Pro', status: 'Active', joined: 'Mar 20, 2026', avatar: 'LF' },
    { id: 8, name: 'Raj Patel', email: 'raj@techco.in', role: 'Viewer', plan: 'Starter', status: 'Inactive', joined: 'Mar 25, 2026', avatar: 'RP' },
]

const statusStyle = {
    Active: 'bg-[#f43f5e]/15 text-[#fb7185]',
    Inactive: 'bg-white/5 text-[#6b3a4a]',
}

const planStyle = {
    Enterprise: 'bg-[#9f1239]/30 text-[#fda4af]',
    Pro: 'bg-[#f43f5e]/15 text-[#fb7185]',
    Starter: 'bg-white/5 text-[#6b3a4a]',
}

export default function Users() {
    const [search, setSearch] = useState('')

    const filtered = users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-[#fff1f2]">Users</h1>
                    <p className="text-sm text-[#9f5a6e] mt-0.5">{users.length} total members</p>
                </div>
                <button className="flex items-center gap-2 bg-[#f43f5e] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#e11d48] transition-all shadow-lg shadow-[#f43f5e]/20">
                    + Invite User
                </button>
            </div>

            {/* Search */}
            <div className="flex items-center gap-3 bg-[#180f16] border border-[#f43f5e]/10 rounded-xl px-4 py-2.5 max-w-sm">
                <Search size={15} className="text-[#9f5a6e] shrink-0" />
                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="bg-transparent text-sm outline-none w-full text-[#fff1f2] placeholder-[#6b3a4a]"
                />
            </div>

            {/* Table */}
            <div className="bg-[#180f16] rounded-2xl border border-[#f43f5e]/10 overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-[#f43f5e]/10">
                            {['User', 'Role', 'Plan', 'Status', 'Joined'].map(h => (
                                <th key={h} className="text-left text-[10px] font-semibold text-[#6b3a4a] uppercase tracking-wider px-5 py-3">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((u, i) => (
                            <tr key={u.id} className={`hover:bg-[#f43f5e]/[0.03] transition-colors ${i < filtered.length - 1 ? 'border-b border-[#f43f5e]/[0.06]' : ''}`}>
                                <td className="px-5 py-3.5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f43f5e] to-[#9f1239] flex items-center justify-center text-white text-xs font-bold shrink-0">
                                            {u.avatar}
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#fff1f2]">{u.name}</p>
                                            <p className="text-xs text-[#6b3a4a]">{u.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-3.5 text-[#9f5a6e]">{u.role}</td>
                                <td className="px-5 py-3.5">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${planStyle[u.plan]}`}>{u.plan}</span>
                                </td>
                                <td className="px-5 py-3.5">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[u.status]}`}>{u.status}</span>
                                </td>
                                <td className="px-5 py-3.5 text-xs text-[#6b3a4a]">{u.joined}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}