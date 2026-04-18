import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaSearch } from 'react-icons/fa';

const CERTS = [
  { title:'Complete ASP.NET Core MVC 6',          issuer:'Udemy',  date:'Jan 2026', category:'.NET'   },
  { title:'C# 12 Mastery: Console to Web',         issuer:'Udemy',  date:'Jan 2026', category:'.NET'   },
  { title:'React Crash Course: Zero to Hero',      issuer:'Udemy',  date:'Mar 2026', category:'React'  },
  { title:'Docker MasterClass: Compose & SWARM',   issuer:'Udemy',  date:'Dec 2025', category:'DevOps' },
  { title:'Google Prompting Essentials',           issuer:'Google', date:'Jul 2025', category:'AI'     },
  { title:'Computer Networks Fundamentals',        issuer:'Udemy',  date:'Jul 2025', category:'Other'  },
  { title:'Crash Course on Python',                issuer:'Google', date:'Jul 2025', category:'Other'  },
  { title:'Introduction to Git and GitHub',        issuer:'Google', date:'Jul 2025', category:'DevOps' },
  { title:'Microsoft Power BI — Advanced Guide',   issuer:'Udemy',  date:'Mar 2026', category:'Other'  },
];
const FILTERS = ['All','.NET','React','DevOps','AI','Other'];

const Certifications = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const visible = CERTS.filter(c => {
    const mf = filter==='All' || c.category===filter;
    const ms = c.title.toLowerCase().includes(search.toLowerCase()) || c.issuer.toLowerCase().includes(search.toLowerCase());
    return mf && ms;
  });

  return (
    <section className="certifications" id="certifications">
      <motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        Licenses &amp; Certifications
      </motion.h2>
      <motion.div className="cert-search-wrap" initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <FaSearch className="cert-search-icon" />
        <input type="text" className="cert-search" placeholder="Search certifications…"
          value={search} onChange={e => setSearch(e.target.value)} />
      </motion.div>
      <div className="filter-container">
        {FILTERS.map(f => (
          <motion.button key={f} className={`filter-btn${filter===f?' active':''}`}
            onClick={() => setFilter(f)} whileHover={{ scale:1.06 }} whileTap={{ scale:.94 }}>
            {f}
          </motion.button>
        ))}
      </div>
      <motion.div layout className="cert-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((c, i) => (
            <motion.div className="cert-card" key={c.title} layout
              initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, scale:.9 }}
              transition={{ delay:i*.06, duration:.4 }} whileHover={{ y:-6 }}>
              <FaAward className="cert-icon" />
              <div className="cert-info">
                <h3>{c.title}</h3>
                <span className="cert-issuer">{c.issuer}</span>
                <div className="cert-meta">
                  <span className="cert-date">{c.date}</span>
                  <span className="cert-category">{c.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {visible.length===0 && <p className="cert-empty">No certifications match your search.</p>}
      </motion.div>
    </section>
  );
};
export default Certifications;