import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaFire } from 'react-icons/fa';

const USERNAME = 'farmanullah1';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();

        const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);
        const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))];

        setStats({
          publicRepos: user.public_repos || repos.length,
          totalStars,
          totalForks,
          languages: languages.slice(0, 6),
          followers: user.followers || 0,
        });
      } catch {
        setStats(null);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading || !stats) return null;

  const ITEMS = [
    { icon: <FaCode />, num: stats.publicRepos, label: 'Repositories', color: '#e040fb' },
    { icon: <FaStar />, num: stats.totalStars, label: 'Stars Earned', color: '#ffab40' },
    { icon: <FaCodeBranch />, num: stats.totalForks, label: 'Forks', color: '#00e5ff' },
    { icon: <FaFire />, num: stats.languages.length, label: 'Languages', color: '#00e676' },
  ];

  return (
    <section className="github-stats" id="github-stats">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <FaGithub style={{ marginRight: 12, verticalAlign: 'middle' }} />
        GitHub Activity
      </motion.h2>

      <motion.p
        className="github-stats-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        A snapshot of my open-source contributions and coding activity.
      </motion.p>

      <div className="github-stats-grid">
        {ITEMS.map((item, i) => (
          <motion.div
            className="github-stat-card"
            key={i}
            style={{ '--stat-color': item.color }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <span className="github-stat-icon" style={{ color: item.color }}>
              {item.icon}
            </span>
            <AnimatedCounter target={item.num} />
            <span className="github-stat-label">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="github-languages"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {stats.languages.map((lang, i) => (
          <span className="github-lang-pill" key={i}>
            {lang}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="github-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <FaGithub /> View Full Profile
        </a>
      </motion.div>
    </section>
  );
};

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (target === 0) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <motion.span
      className="github-stat-num"
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count}+
    </motion.span>
  );
};

export default GitHubStats;
