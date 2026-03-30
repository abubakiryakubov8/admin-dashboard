import { useState } from 'react'

const orders = [
    { id: '#ORD-1042', customer: 'Sarah Johnson', product: 'Enterprise', amount: '$299.00', status: 'Completed', date: 'Mar 29, 2026' },
    { id: '#ORD-1041', customer: 'David Kim', product: 'Pro Plan', amount: '$49.00', status: 'Pending', date: 'Mar 29, 2026' },
    { id: '#ORD-1040', customer: 'Maya Lopes', product: 'Pro Plan', amount: '$49.00', status: 'Completed', date: 'Mar 28, 2026' },
    { id: '#ORD-1039', customer: 'James Carter', product: 'Starter', amount: '$0.00', status: 'Completed', date: 'Mar 28, 2026' },
    { id: '#ORD-1038', customer: 'Aisha Tanaka', product: 'Enterprise', amount: '$299.00', status: 'Failed', date: 'Mar 27, 2026' },
    { id: '#ORD-1037', customer: 'Omar Castillo', product: 'Pro Plan', amount: '$49.00', status: 'Completed', date: 'Mar 27, 2026' },
    { id: '#ORD-1036', customer: 'Lena Fischer', product: 'Pro Plan', amount: '$49.00', status: 'Refunded', date: 'Mar 26, 2026' },
    { id: '#ORD-1035', customer: 'Raj Patel', product: 'Starter', amount: '$0.00', status: 'Completed', date: 'Mar 26, 2026' },
]

const statusStyle = {
    Completed: 'bg-[#f43f5e]/15 text-[#fb7185]',
    Pending: 'bg-[#f59e0b]/15 text-[#fbbf24]',
    Failed: 'bg-[#9f1239]/30 text-[#fda4af]',
    Refunded: 'bg-white/5 text-[#6b3a4a]',
}

const filters = ['All', 'Completed', 'Pending', 'Failed', 'Refunded']

export default function Orders() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? orders : orders.filter(o => o.status === active)

    return (
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold text-[#fff1f2]">Orders</h1>
                    <p className="text-sm text-[#9f5a6e] mt-0.5">{orders.length} total orders</p>
                </div>
                <button className="flex items-center gap-2 bg-[#f43f5e] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#e11d48] transition-all shadow-lg shadow-[#f43f5e]/20">
                    Export CSV
                </button>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setActive(f)}
                        className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${active === f
                                ? 'bg-[#f43f5e] text-white shadow-lg shadow-[#f43f5e]/20'
                                : 'bg-[#180f16] border border-[#f43f5e]/10 text-[#9f5a6e] hover:border-[#f43f5e]/30 hover:text-[#fff1f2]'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-[#180f16] rounded-2xl border border-[#f43f5e]/10 overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-[#f43f5e]/10">
                            {['Order', 'Customer', 'Product', 'Amount', 'Status', 'Date'].map(h => (
                                <th key={h} className="text-left text-[10px] font-semibold text-[#6b3a4a] uppercase tracking-wider px-5 py-3">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((o, i) => (
                            <tr key={o.id} className={`hover:bg-[#f43f5e]/[0.03] transition-colors ${i < filtered.length - 1 ? 'border-b border-[#f43f5e]/[0.06]' : ''}`}>
                                <td className="px-5 py-3.5 font-mono text-xs text-[#6b3a4a]">{o.id}</td>
                                <td className="px-5 py-3.5 font-medium text-[#fff1f2]">{o.customer}</td>
                                <td className="px-5 py-3.5 text-[#9f5a6e]">{o.product}</td>
                                <td className="px-5 py-3.5 font-semibold text-[#fff1f2]">{o.amount}</td>
                                <td className="px-5 py-3.5">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[o.status]}`}>
                                        {o.status}
                                    </span>
                                </td>
                                <td className="px-5 py-3.5 text-xs text-[#6b3a4a]">{o.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}