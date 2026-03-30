const orders = [
    { id: '#ORD-1042', customer: 'Sarah Johnson', email: 'sarah@forma.io', product: 'Pro Plan', amount: '$49.00', status: 'Completed', date: 'Mar 29' },
    { id: '#ORD-1041', customer: 'David Kim', email: 'david@orbit.co', product: 'Enterprise', amount: '$299.00', status: 'Pending', date: 'Mar 29' },
    { id: '#ORD-1040', customer: 'Maya Lopes', email: 'maya@velo.io', product: 'Pro Plan', amount: '$49.00', status: 'Completed', date: 'Mar 28' },
    { id: '#ORD-1039', customer: 'James Carter', email: 'james@stack.dev', product: 'Starter', amount: '$0.00', status: 'Completed', date: 'Mar 28' },
    { id: '#ORD-1038', customer: 'Aisha Tanaka', email: 'aisha@nova.ai', product: 'Enterprise', amount: '$299.00', status: 'Failed', date: 'Mar 27' },
    { id: '#ORD-1037', customer: 'Omar Castillo', email: 'omar@build.io', product: 'Pro Plan', amount: '$49.00', status: 'Completed', date: 'Mar 27' },
]

const statusStyle = {
    Completed: 'bg-[#f43f5e]/15 text-[#fb7185]',
    Pending: 'bg-[#f59e0b]/15 text-[#fbbf24]',
    Failed: 'bg-[#9f1239]/30 text-[#fda4af]',
}

export default function RecentTable() {
    return (
        <div className="bg-[#180f16] rounded-2xl border border-[#f43f5e]/10 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#f43f5e]/10">
                <div>
                    <h3 className="font-semibold text-base text-[#fff1f2]">Recent Orders</h3>
                    <p className="text-xs text-[#9f5a6e] mt-0.5">Last 6 transactions</p>
                </div>
                <button className="text-xs font-semibold text-[#f43f5e] hover:text-[#fb7185] transition-colors">
                    View all →
                </button>
            </div>
            <div className="overflow-x-auto">
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
                        {orders.map((o, i) => (
                            <tr
                                key={o.id}
                                className={`hover:bg-[#f43f5e]/[0.03] transition-colors ${i < orders.length - 1 ? 'border-b border-[#f43f5e]/[0.06]' : ''
                                    }`}
                            >
                                <td className="px-5 py-3.5 font-mono text-xs text-[#6b3a4a]">{o.id}</td>
                                <td className="px-5 py-3.5">
                                    <p className="font-medium text-[#fff1f2] text-sm">{o.customer}</p>
                                    <p className="text-xs text-[#6b3a4a]">{o.email}</p>
                                </td>
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
        </div>
    )
}
