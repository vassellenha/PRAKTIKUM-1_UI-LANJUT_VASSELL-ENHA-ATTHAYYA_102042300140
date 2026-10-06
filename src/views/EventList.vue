<template>
  <div class="event-list-page">
    <div class="header-section">
      <h2 class="section-title">Upcoming Events</h2>
      <p class="section-desc">Browse through our handpicked selection of events happening near you.</p>
    </div>

    <div class="event-grid">
      <div
        class="event-card"
        v-for="event in events"
        :key="event.id"
      >
        <div class="event-body">
          <div class="event-meta">
            <span class="event-date">{{ event.date }}</span>
            <span class="event-category">{{ event.category }}</span>
          </div>

          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-loc">{{ event.location }}</p>
          <p class="event-desc">{{ event.shortDesc }}</p>

          <div class="card-footer">
            <router-link
              :to="`/browse/events/${event.id}`"
              class="btn-link"
            >
              View Details &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { events } from '@/data/events.js'
</script>

<style scoped>
.header-section { margin-bottom: var(--space-8); }
.section-title { font-size: 2.2rem; margin-bottom: var(--space-2); }
.section-desc { color: var(--text-muted); font-size: 1.1rem; }

/* ADAPTIVE GRID */
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}

/* COMMON REGIONS */
.event-card {
  background: white;
  border-radius: var(--space-4);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
}

/* PROXIMITY */
.event-body { padding: var(--space-6); display: flex; flex-direction: column; height: 100%; }

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}

.event-date {
  background: rgba(102, 68, 255, 0.1);
  color: var(--primary);
  padding: var(--space-1) var(--space-2);
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
}

.event-category { color: var(--text-muted); font-size: 0.85rem; font-weight: 500; text-transform: uppercase; }
.event-title { margin-bottom: var(--space-2); font-size: 1.4rem; }
.event-loc { color: var(--text-muted); font-size: 0.95rem; margin-bottom: var(--space-4); }
.event-desc { color: var(--text-muted); line-height: 1.6; font-size: 0.95rem; margin-bottom: var(--space-6); flex-grow: 1; }

.card-footer {
  border-top: 1px solid var(--border-color);
  padding-top: var(--space-4);
}

.btn-link {
  color: var(--text-main);
  font-weight: 600;
  text-decoration: none;
}
.btn-link:hover { color: var(--primary); }
</style>