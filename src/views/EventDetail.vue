<template>
  <div
    v-if="event"
    class="event-detail-page"
  >
    <button
      class="btn-back"
      @click="router.push('/browse/events')"
    >
      &larr; Back to Event List
    </button>

    <div class="detail-header">
      <div class="header-content">
        <span class="event-tag">{{ event.category }}</span>
        <h1>{{ event.title }}</h1>

        <div class="meta-info">
          <span class="meta-item">&#128197; {{ event.date }} &middot; {{ event.time }}</span>
          <span class="meta-item">&#128205; {{ event.location }}</span>
        </div>
      </div>
    </div>

    <div class="detail-content">
      <div class="main-desc">
        <h2>About This Event</h2>
        <p
          v-for="(paragraph, index) in event.description"
          :key="index"
        >
          {{ paragraph }}
        </p>

        <h2>Agenda</h2>
        <ul class="agenda-list">
          <li
            v-for="(item, index) in event.agenda"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="sidebar">
        <div class="ticket-card">
          <h3>Ticket Price</h3>
          <div class="price">{{ event.price }}</div>
          <p class="ticket-desc">{{ event.ticketDesc }}</p>

          <button class="btn-register">Register Now</button>

          <p class="spots">{{ event.spots }}</p>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="event-not-found"
  >
    <p>Event not found.</p>
    <button
      class="btn-back"
      @click="router.push('/browse/events')"
    >
      &larr; Back to Event List
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEventById } from '@/data/events.js'

const route = useRoute()
const router = useRouter()

const event = computed(() => getEventById(route.params.id))
</script>

<style scoped>
.btn-back {
  background: none;
  border: none;
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.2s;
  padding: 0;
}

.btn-back:hover {
  color: #6644ff;
}

.detail-header {
  background: #fdfdfd;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
  padding: 4rem 3rem;
  margin-bottom: 3rem;
}

.header-content {
  max-width: 800px;
}

.event-tag {
  display: inline-block;
  background: rgba(102, 68, 255, 0.1);
  color: #6644ff;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.header-content h1 {
  color: #1c1948;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #555;
  font-weight: 500;
  font-size: 1.05rem;
}

.detail-content {
  display: flex;
  gap: 4rem;
}

.main-desc {
  flex: 2;
}

.main-desc h2 {
  color: #1c1948;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-desc h2::before {
  content: "";
  display: block;
  width: 20px;
  height: 4px;
  background: #6644ff;
  border-radius: 2px;
}

.main-desc p {
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.agenda-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.agenda-list li {
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  color: #444;
  font-size: 1.05rem;
}

.sidebar {
  flex: 1;
}

.ticket-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  text-align: center;
  position: sticky;
  top: 100px;
}

.ticket-card h3 {
  color: #1c1948;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.8rem;
  font-weight: 800;
  color: #6644ff;
  margin-bottom: 0.5rem;
}

.ticket-desc {
  color: #666;
  margin-bottom: 2rem;
}

.btn-register {
  width: 100%;
  padding: 1.2rem;
  background: #1c1948;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-register:hover {
  background: #6644ff;
}

.spots {
  margin-top: 1.5rem;
  color: #e63946;
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .detail-content {
    flex-direction: column;
  }

  .detail-header {
    padding: 3rem 2rem;
  }

  .header-content h1 {
    font-size: 2.2rem;
  }
}
</style>