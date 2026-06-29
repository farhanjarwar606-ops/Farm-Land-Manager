import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ERPProvider } from '@/context/ERPContext'
import { Sidebar } from '@/components/Sidebar'
import { Dashboard } from '@/pages/Dashboard'
import { Farmers } from '@/pages/Farmers'
import { FarmerLedger } from '@/pages/FarmerLedger'
import { Seasons } from '@/pages/Seasons'
import { Expenses } from '@/pages/Expenses'
import { Income } from '@/pages/Income'
import { Advances } from '@/pages/Advances'
import { Reports } from '@/pages/Reports'
import { Settings } from '@/pages/Settings'

export default function App() {
  return (
    <ERPProvider>
      <BrowserRouter>
        <div className="flex min-h-screen bg-slate-50">
          <Sidebar />
          <main className="flex-1 min-w-0 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/farmers" element={<Farmers />} />
              <Route path="/ledger" element={<FarmerLedger />} />
              <Route path="/ledger/:farmerId" element={<FarmerLedger />} />
              <Route path="/seasons" element={<Seasons />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/income" element={<Income />} />
              <Route path="/advances" element={<Advances />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ERPProvider>
  )
}
