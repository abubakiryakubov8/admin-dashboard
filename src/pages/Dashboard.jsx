import StatCard from '../components/StatCard'
import SalesChart from '../components/SalesChart'
import UsersChart from '../components/UsersChart'
import RecentTable from '../components/RecentTable'

export default function Dashboard() {
    return (
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
            <div>
                <h1 className="text-xl font-bold text-[#fff1f2]">Dashboard</h1>
                <p className="text-sm text-[#9f5a6e] mt-0.5">Welcome back, Abu. Here's what's happening.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard title="Total Revenue" value="$84,325" change="+12.5%" up icon="💰" color="rose" />
                <StatCard title="Active Users" value="24,521" change="+8.2%" up icon="👥" color="pink" />
                <StatCard title="New Orders" value="1,893" change="+3.1%" up icon="📦" color="fuchsia" />
                <StatCard title="Churn Rate" value="2.4%" change="-0.5%" up icon="📉" color="red" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="xl:col-span-2"><SalesChart /></div>
                <UsersChart />
            </div>
            <RecentTable />
        </main>
    )
}