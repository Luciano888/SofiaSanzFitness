# Cómo desplegar en DigitalOcean App Platform (GRATIS)

## Plan Gratuito de DigitalOcean

DigitalOcean ofrece un plan **Hobby** (gratuito) que incluye:
- ✅ **3 sitios estáticos gratuitos**
- ✅ **100 GB de transferencia de datos por mes**
- ✅ **SSL/HTTPS automático**
- ✅ **Deploy automático desde GitHub**

## Pasos para desplegar:

### 1. Crear cuenta en DigitalOcean (si no tenés)

1. Andá a: https://www.digitalocean.com/
2. Click en **"Sign Up"** (Registrarse)
3. Completá el formulario (podés usar email o cuenta de Google)
4. Verificá tu email

### 2. Conectar el repositorio de GitHub

1. Una vez dentro de DigitalOcean, andá a: https://cloud.digitalocean.com/apps
2. Click en **"Create App"** (Crear App)
3. Seleccioná **"GitHub"** como fuente
4. Si es la primera vez, autorizá a DigitalOcean para acceder a tu GitHub
5. Seleccioná tu repositorio: `Luciano888/SofiaSanzFitness`
6. Seleccioná la rama: `main`
7. Click en **"Next"**

### 3. Configurar la App (IMPORTANTE - Para que sea GRATIS)

1. **Tipo de App**: Seleccioná **"Static Site"** (NO Web Service)
   - ⚠️ **CRÍTICO**: Si seleccionás "Web Service" te van a cobrar. Debe ser "Static Site"

2. **Configuración del Build**:
   - **Build Command**: `cd landing-page && npm install && npm run build`
     - ⚠️ **IMPORTANTE**: Debe incluir `cd landing-page` para cambiar al directorio correcto
   - **Output Directory**: `landing-page/out`
     - ⚠️ **IMPORTANTE**: Debe ser `landing-page/out` (no solo `out`)
   - **Node Version**: Se detecta automáticamente (debería ser 22.x)

3. Click en **"Next"**

### 4. Configurar Variables de Entorno (EmailJS)

1. En la sección **"Environment Variables"**, agregá estas 3 variables:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_0wx61bv
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_n0hcuzc
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ppQC7R9V_Qvcjn7qz
   ```

2. Para cada variable:
   - Click en **"Add Variable"**
   - Ingresá el nombre de la variable
   - Ingresá el valor
   - Click en **"Save"**

3. Click en **"Next"**

### 5. Seleccionar el Plan (GRATIS)

1. En **"Choose a plan"**, seleccioná:
   - **"Hobby"** (Plan gratuito)
   - Esto te da 3 sitios estáticos gratis

2. Click en **"Next"**

### 6. Revisar y Desplegar

1. Revisá la configuración:
   - Tipo: Static Site ✅
   - Plan: Hobby (Free) ✅
   - Variables de entorno: 3 configuradas ✅

2. Click en **"Create Resources"** o **"Deploy"**

3. DigitalOcean comenzará a construir y desplegar tu sitio
   - Esto puede tomar 3-5 minutos

### 7. Obtener la URL de tu sitio

1. Una vez completado el deploy, verás una URL como:
   ```
   https://tu-app-xxxxx.ondigitalocean.app
   ```

2. Esta URL es tu sitio publicado y funcionando

## Configuración de Deploy Automático

Por defecto, DigitalOcean configurará:
- ✅ **Auto-deploy**: Cada vez que hagas push a `main`, se desplegará automáticamente
- ✅ **SSL/HTTPS**: Se configura automáticamente
- ✅ **CDN**: Incluido en el plan gratuito

## Verificar que funciona

1. Visitá la URL que te dio DigitalOcean
2. Probá el formulario de contacto para verificar que EmailJS funciona
3. Si todo está bien, ¡tu sitio está publicado y funcionando!

## Costos

- **Sitio estático en plan Hobby**: **$0 USD/mes** (GRATIS)
- Solo te cobrarán si:
  - Usás más de 3 sitios estáticos
  - Cambiás a un plan pago
  - Excedés los 100 GB de transferencia (muy difícil con un sitio pequeño)

## Troubleshooting

### Error 404: "Página no encontrada" (Sitio en blanco o 404)

**Síntoma**: El build se completa exitosamente pero al acceder al sitio ves un 404 o página en blanco.

**Causa**: El Output Directory no está configurado correctamente.

**Solución**:
1. Andá a tu app en DigitalOcean: https://cloud.digitalocean.com/apps
2. Click en tu app
3. Click en **"Settings"** (Configuración)
4. Scroll hasta **"Static Site"** o **"Build & Deploy"**
5. Buscá **"Output Directory"** o **"Document Root"**
6. Cambiá el valor a: `landing-page/out`
7. Guardá los cambios
8. DigitalOcean hará un nuevo deploy automáticamente

**Verificación en los logs**:
Si ves en los logs:
```
checking /workspace/public: found
✔ using document root /workspace/public
```

Pero debería decir:
```
checking /workspace/landing-page/out: found
✔ using document root /workspace/landing-page/out
```

### Error: "Build failed"
- Verificá que el **Build Command** sea: `cd landing-page && npm run build`
- Verificá que el **Output Directory** sea: `landing-page/out`

### Error: "EmailJS no funciona"
- Verificá que las 3 variables de entorno estén configuradas correctamente
- Verificá que los valores sean exactamente los que tenés en `.env.local`

### El sitio no se actualiza
- Verificá que el auto-deploy esté habilitado
- Podés hacer un deploy manual desde la interfaz de DigitalOcean

## Actualizar el sitio

Cada vez que hagas cambios:
1. Hacé los cambios en tu código local
2. Hacé commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   ```
3. DigitalOcean detectará el cambio y desplegará automáticamente (2-5 minutos)

---

**¡Listo! Tu sitio está publicado y funcionando gratis en DigitalOcean! 🚀**

