import { createRoot } from 'react-dom/client'
import { Router } from './routes/routes'

const root = createRoot(document.getElementById('root')!)
root.render(<Router />)