

# 💸 Saldo Cero

> _Libera tu mente del estrés financiero._

**Saldo Cero** es una app minimalista de finanzas personales diseñada para ayudarte a tomar decisiones con claridad. No necesitas conectar cuentas bancarias ni entender contabilidad: solo anota lo esencial y nosotros hacemos el resto.

---

## ✨ ¿Qué es Saldo Cero?

Una herramienta simple y directa para:

- 📌 Saber cuánto dinero tienes realmente  
- 📅 Organizar tus pagos y cobros  
- 🚨 Evitar olvidos y gastos fantasmas  
- 📈 Tomar decisiones financieras sin ansiedad

Sin curvas de aprendizaje. Sin publicidad. Sin humo.

---

## 🧠 Filosofía

- **Menos fricción, más claridad**  
- **Privacidad por defecto** (tus datos son tuyos)  
- **Cero estrés, cero deudas, cero enredos**

Pensada para personas que:

- Se estresan al ver su cuenta
- Quieren ahorrar pero no logran hacerlo
- Sienten que su plata “se va sola”
- Necesitan control, pero sin Excel ni apps bancarias confusas

---

## 🛠️ Stack Tecnológico

- **Frontend:** Astro + React  
- **Estado y lógica:** Signals + Store propia  
- **Backend (próximamente):** Supabase / SQLite local  
- **Estilo:** Tailwind CSS + diseño responsivo 
- **CI/CD (próximamente):** GitHub Actions

---

## 🚧 Funciones en desarrollo

Lista de funciones implementadas o por implementar (se irá actualizando):

| Estado | Función                              | Descripción breve                        |
|--------|--------------------------------------|-------------------------------------------|
| ✅     | Onboarding                           | Flujo simple para explicar la app         |
| 🟡     | Registro de ingresos/gastos          | Entrada manual con sugerencias            |
| 🔜     | Cálculo de saldo real                | Resta automática de pagos futuros         |
| 🔜     | Notificaciones inteligentes          | Recordatorios personalizados              |
| 🔜     | Planificador mensual                 | Vista de flujo futuro de dinero           |
| 🔜     | Sincronización opcional (Supabase)   | Guardado en la nube (opt-in)              |

> 🧩 Puedes contribuir, sugerir ideas o simplemente seguir el avance.

---

## 📲 Próximamente

- App para Android (PWA)
- Modo oscuro automático
- Integración con calendario

---

## 🧑‍💻 ¿Quién está detrás?

Proyecto personal de [Daniel](https://github.com/cldrojas), ingeniero informático con hambre de claridad financiera y diseño funcional.  
Inspirado por el caos, construido con cariño.

---

## 🗂 Estructura base del proyecto
```
src/pages/
├── index.astro                  → Dashboard (Inicio)
├── registrar.astro              → Registrar gasto/ingreso
├── historial.astro              → Movimientos previos
├── metas.astro                  → Metas de ahorro
├── presupuesto.astro            → Presupuesto mensual
├── configuracion.astro          → Perfil y ajustes
├── onboarding.astro
```
