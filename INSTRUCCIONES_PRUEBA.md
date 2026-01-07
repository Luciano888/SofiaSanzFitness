# 🧪 Cómo Probar el Proyecto Localmente

## Paso 1: Instalar Dependencias

```bash
cd landing-page
npm install
```

Esto instalará todas las dependencias, incluyendo `@emailjs/browser`.

---

## Paso 2: Configurar EmailJS (Opcional para probar el formulario)

### 2.1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (tiene 200 emails/mes gratis)

### 2.2. Configurar Email Service
1. En el dashboard, ve a **Email Services**
2. Click en **Add New Service**
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu email
5. **Copia el Service ID** (ej: `service_abc123`)

### 2.3. Crear Email Template
1. Ve a **Email Templates**
2. Click en **Create New Template**
3. Configura el template así:

**Subject:**
```
Inscripción al plan: {{plan}}
```

**Content (HTML):**
```html
<p>¡Hola <strong>{{nombre}}</strong>!</p>
<p>Gracias por inscribirte al plan <strong>{{plan}}</strong>.</p>
<p>Tu consulta: {{consulta}}</p>
<p>Nos pondremos en contacto con vos pronto.</p>
<p>¡Gracias por confiar!</p>
```

4. **Copia el Template ID** (ej: `template_xyz789`)

### 2.4. Obtener Public Key
1. Ve a **Account** > **General**
2. En la sección **API Keys**, copia tu **Public Key** (ej: `abcdefghijklmnop`)

### 2.5. Crear archivo .env.local
En la carpeta `landing-page`, crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

**⚠️ IMPORTANTE:** El archivo `.env.local` está en `.gitignore`, así que no se subirá a GitHub.

---

## Paso 3: Probar en Modo Desarrollo

### Opción A: Modo Desarrollo (con hot reload)
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

**Nota:** En modo desarrollo, Next.js no usa `output: 'export'`, así que funciona normalmente.

### Probar el formulario:
1. Navega hasta la sección "Planes"
2. Click en "Quiero inscribirme" en cualquier plan
3. Completa el formulario
4. Envía el formulario
5. Deberías recibir un email de confirmación

---

## Paso 4: Probar el Build Estático (Simular DigitalOcean)

### 4.1. Hacer el build
```bash
npm run build
```

Esto debería:
- ✅ Compilar sin errores
- ✅ Generar la carpeta `out/` con los archivos estáticos
- ✅ No mostrar errores sobre API routes

### 4.2. Verificar la carpeta `out/`
```bash
# En Windows PowerShell
dir out

# O en Git Bash / WSL
ls out
```

Deberías ver:
- `index.html`
- `_next/` (carpeta con assets)
- Archivos estáticos

### 4.3. Servir los archivos estáticos localmente

**Opción 1: Con Python (si lo tenés instalado)**
```bash
# Python 3
cd out
python -m http.server 8000
```

**Opción 2: Con Node.js (http-server)**
```bash
# Instalar globalmente (una sola vez)
npm install -g http-server

# Servir la carpeta out
cd out
http-server -p 8000
```

**Opción 3: Con npx (sin instalar nada)**
```bash
cd out
npx serve -p 8000
```

Luego abre [http://localhost:8000](http://localhost:8000)

---

## Paso 5: Verificar que Todo Funciona

### ✅ Checklist de Verificación:

- [ ] El sitio carga correctamente
- [ ] Las imágenes se muestran (logo, fotos de planes, testimonios)
- [ ] El slider funciona
- [ ] Los enlaces de navegación funcionan
- [ ] El formulario se muestra al hacer click en "Quiero inscribirme"
- [ ] El formulario envía emails (si configuraste EmailJS)
- [ ] El build genera la carpeta `out/` sin errores
- [ ] Los archivos estáticos se sirven correctamente

---

## 🐛 Solución de Problemas

### Error: "EmailJS no está configurado"
- Verifica que creaste el archivo `.env.local`
- Verifica que las variables empiezan con `NEXT_PUBLIC_`
- Reinicia el servidor de desarrollo (`npm run dev`)

### Error: "Module not found: @emailjs/browser"
```bash
npm install
```

### Error en el build: "Cannot find module 'next'"
```bash
cd landing-page
npm install
```

### Las imágenes no se muestran
- Verifica que las imágenes estén en la carpeta `public/`
- Verifica que las rutas empiecen con `/` (ej: `/logo.png`)

### El build no genera la carpeta `out/`
- Verifica que `next.config.ts` tenga `output: 'export'`
- Revisa los errores en la consola durante el build

---

## 📝 Notas Importantes

1. **Modo Desarrollo vs Build:**
   - `npm run dev` → No usa static export, funciona como Next.js normal
   - `npm run build` → Genera archivos estáticos en `out/`

2. **Variables de Entorno:**
   - En desarrollo: usa `.env.local`
   - En DigitalOcean: configúralas en App Platform > Settings > Environment Variables

3. **EmailJS:**
   - Plan gratuito: 200 emails/mes
   - No requiere servidor backend
   - Funciona perfectamente con static export

---

## 🚀 Siguiente Paso: Deploy en DigitalOcean

Una vez que probaste todo localmente y funciona:

1. Sube los cambios a GitHub
2. En DigitalOcean App Platform:
   - Tipo: **Static Site**
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Agrega las variables de entorno de EmailJS

¡Listo! 🎉

