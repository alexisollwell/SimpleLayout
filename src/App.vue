<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'

const config = reactive({
  sidebarFlex: 1,
  mainFlex: 3,
  topSectionFlex: 2,
  bottomSectionFlex: 2,
  card1Flex: 1,
  card2Flex: 2,
  card3Flex: 1,
  gap: 12,
  radius: 12,
  borderWidth: 2,
})

const colorDinamico = ref('#22c55e')
let intervaloId = null

function cambiarColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  colorDinamico.value = `rgb(${r}, ${g}, ${b})`
}

onMounted(() => {
  intervaloId = setInterval(cambiarColor, 1000)
})

onUnmounted(() => {
  clearInterval(intervaloId)
})
</script>

<template>
  <Column :gap="config.gap" :padding="14" style="height: 100vh">
    
  </Column>

<!--
  <img 
    src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="" 
    style="width: 100%; 
    height: 100%; 
    object-fit: cover;">
-->

  <!--
  <Column :gap="config.gap" :padding="14" style="height: 100vh">
    <Container
      :flex="1"
      color="#1e293b"
      borderColor="#38bdf8"
      :borderWidth="config.borderWidth"
      :borderRadius="config.radius"
      :padding="16"
      :elevation="2"
    >
      <Row mainAxisAlignment="spaceAround" crossAxisAlignment="center">
        <div>
          <h1 class="title">Row, Column &amp; Container</h1>
        </div>
        <Row mainAxisSize="min" :gap="12" crossAxisAlignment="center">
          <label class="control">
            <span>Sidebar flex: <b>{{ config.sidebarFlex }}</b></span>
            <input v-model.number="config.sidebarFlex" type="range" min="1" max="4" />
          </label>
          <label class="control">
            <span>Main flex: <b>{{ config.mainFlex }}</b></span>
            <input v-model.number="config.mainFlex" type="range" min="1" max="6" />
          </label>
          <label class="control">
            <span>Card 2 flex: <b>{{ config.card2Flex }}</b></span>
            <input v-model.number="config.card2Flex" type="range" min="1" max="5" />
          </label>
          <label class="control">
            <span>Borde (px): <b>{{ config.borderWidth }}</b></span>
            <input v-model.number="config.borderWidth" type="range" min="0" max="6" />
          </label>
        </Row>
      </Row>
    </Container>

    <Container :flex="6">
      <Row :gap="config.gap">
        <Container
          :flex="config.sidebarFlex"
          color="#1e1b4b"
          borderColor="#818cf8"
          :borderWidth="config.borderWidth"
          :borderRadius="config.radius"
          :padding="12"
          :elevation="2"
        >
          <Column :gap="10">
            <Container
              :flex="1"
              color="#312e81"
              borderColor="#a5b4fc"
              :borderWidth="1"
              :borderRadius="8"
              alignment="center"
            >
              <div class="box-label">
                <strong>Sidebar Top</strong>
                <span class="badge">Container (flex: 1)</span>
              </div>
            </Container>

            <Container
              :flex="2"
              color="#3730a3"
              borderColor="#c7d2fe"
              :borderWidth="1"
              borderStyle="dashed"
              :borderRadius="8"
              :padding="10"
            >
              <Column :gap="8">
                <div class="mini-header">Column &gt; Row anidado (flex: 2)</div>
                <Container :flex="1">
                  <Row :gap="8">
                    <Container
                      :flex="1"
                      color="#4f46e5"
                      borderColor="#e0e7ff"
                      :borderWidth="1"
                      :borderRadius="6"
                      alignment="center"
                    >
                      <span class="small-tag">1</span>
                    </Container>
                    <Container
                      :flex="2"
                      color="#6366f1"
                      borderColor="#e0e7ff"
                      :borderWidth="1"
                      :borderRadius="6"
                      alignment="center"
                    >
                      <span class="small-tag">2</span>
                    </Container>
                  </Row>
                </Container>
              </Column>
            </Container>

            <Container
              :flex="1"
              color="#312e81"
              borderColor="#a5b4fc"
              :borderWidth="1"
              :borderRadius="8"
              alignment="center"
            >
              <div class="box-label">
                <strong>Sidebar Footer</strong>
                <span class="badge">Container (flex: 1)</span>
              </div>
            </Container>
          </Column>
        </Container>

        <Container
          :flex="config.mainFlex"
          color="#0f172a"
          borderColor="#334155"
          :borderWidth="config.borderWidth"
          :borderRadius="config.radius"
          :padding="12"
        >
          <Column :gap="config.gap">
            <Container :flex="config.topSectionFlex">
              <Row :gap="config.gap">
                <Container
                  :flex="2"
                  color="#064e3b"
                  borderColor="#34d399"
                  :borderWidth="config.borderWidth"
                  :borderRadius="config.radius"
                  :padding="16"
                  alignment="center"
                >
                  <div class="box-label">
                    <h3>Panel Principal Izquierdo</h3>
                    <span class="badge">Row &gt; Container (flex: 2)</span>
                    <p class="desc">Borde sólido verde esmeralda (#34d399)</p>
                  </div>
                </Container>

                <Container
                  :flex="1"
                  color="#134e4a"
                  borderColor="#2dd4bf"
                  :borderWidth="config.borderWidth"
                  :borderRadius="config.radius"
                  :padding="10"
                >
                  <Column :gap="8">
                    <Container
                      :flex="1"
                      color="#0f766e"
                      borderColor="#5eead4"
                      :borderWidth="1"
                      :borderRadius="8"
                      alignment="center"
                    >
                      <div class="box-label">
                        <strong>Sub-Columna A</strong>
                        <span class="badge">flex: 1</span>
                      </div>
                    </Container>
                    <Container
                      :flex="2"
                      color="#115e59"
                      borderColor="#99f6e4"
                      :borderWidth="1"
                      borderStyle="dashed"
                      :borderRadius="8"
                      alignment="center"
                    >
                      <div class="box-label">
                        <strong>Sub-Columna B</strong>
                        <span class="badge">flex: 2 (dashed)</span>
                      </div>
                    </Container>
                  </Column>
                </Container>
              </Row>
            </Container>

            <Container :flex="config.bottomSectionFlex">
              <Row :gap="config.gap">
                <Container
                  :flex="config.card1Flex"
                  color="#4c1d95"
                  borderColor="#c084fc"
                  :borderWidth="config.borderWidth"
                  :borderRadius="config.radius"
                  alignment="center"
                  :padding="12"
                >
                  <div class="box-label">
                    <h3>Card 1</h3>
                    <span class="badge">flex: {{ config.card1Flex }}</span>
                  </div>
                </Container>

                <Container
                  :flex="config.card2Flex"
                  color="#7c2d12"
                  borderColor="#fb923c"
                  :borderWidth="config.borderWidth"
                  :borderRadius="config.radius"
                  :padding="12"
                >
                  <Column :gap="8">
                    <Container
                      :flex="1"
                      color="#9a3412"
                      borderColor="#fdba74"
                      :borderWidth="1"
                      :borderRadius="8"
                      alignment="center"
                    >
                      <div class="box-label">
                        <strong>Card 2 (Dinámica) — Cabecera Interna</strong>
                        <span class="badge">flex: {{ config.card2Flex }}</span>
                      </div>
                    </Container>

                    <Container :flex="2">
                      <Row :gap="8">
                        <Container
                          :flex="1"
                          color="#c2410c"
                          borderColor="#fed7aa"
                          :borderWidth="1"
                          :borderRadius="8"
                          alignment="center"
                        >
                          <span class="badge">Sub 1 (flex: 1)</span>
                        </Container>
                        <Container
                          :flex="1"
                          color="#ea580c"
                          borderColor="#fed7aa"
                          :borderWidth="1"
                          :borderRadius="8"
                          alignment="center"
                        >
                          <span class="badge">Sub 2 (flex: 1)</span>
                        </Container>
                        <Container
                          :flex="2"
                          color="#f97316"
                          textColor="#0f172a"
                          borderColor="#ffedd5"
                          :borderWidth="2"
                          :borderRadius="8"
                          alignment="center"
                        >
                          <strong>Sub 3 (flex: 2)</strong>
                        </Container>
                      </Row>
                    </Container>
                  </Column>
                </Container>

                <Container
                  :flex="config.card3Flex"
                  color="#831843"
                  borderColor="#f472b6"
                  :borderWidth="config.borderWidth"
                  :borderRadius="config.radius"
                  alignment="center"
                  :padding="12"
                >
                  <div class="box-label">
                    <h3>Card 3</h3>
                    <span class="badge">flex: {{ config.card3Flex }}</span>
                  </div>
                </Container>
              </Row>
            </Container>
          </Column>
        </Container>
      </Row>
    </Container>

    <Container
      :height="44"
      color="#1e293b"
      borderColor="#475569"
      :borderWidth="1"
      :borderRadius="10"
      :padding="'0 16px'"
    >
      <Row mainAxisAlignment="spaceBetween" crossAxisAlignment="center">
        <span class="footer-text">Práctica Tres — Sistema de Layout Declarativo</span>
        <span class="footer-text">
          Proporción actual Body: Sidebar ({{ config.sidebarFlex }}) : Main ({{ config.mainFlex }})
        </span>
      </Row>
    </Container>
  </Column>
-->

</template>

<style scoped>
.title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #f8fafc;
}

.subtitle {
  font-size: 0.82rem;
  color: #94a3b8;
  margin-top: 2px;
}

.control {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.75rem;
  color: #cbd5e1;
  background: rgba(15, 23, 42, 0.6);
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #334155;
}

.control input[type='range'] {
  width: 90px;
  accent-color: #38bdf8;
  cursor: pointer;
}

.box-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
}

.badge {
  display: inline-block;
  font-size: 0.75rem;
  font-family: monospace;
  background: rgba(0, 0, 0, 0.35);
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.desc {
  font-size: 0.78rem;
  opacity: 0.85;
}

.mini-header {
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  opacity: 0.9;
}

.small-tag {
  font-weight: 700;
  font-size: 0.9rem;
}

.footer-text {
  font-size: 0.78rem;
  color: #94a3b8;
}
</style>
