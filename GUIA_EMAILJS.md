# 📧 Guía Completa: Configurar EmailJS

## Paso 1: Crear Cuenta en EmailJS

### 1.1. Ir a la página de registro
Ve a: **https://dashboard.emailjs.com/sign-up**

### 1.2. Completar el formulario de registro
El formulario tiene estos campos:
- **Your Name**: Tu nombre completo
- **Your Email**: Tu email (será tu usuario)
- **Password**: Crea una contraseña segura
- **Confirm Password**: Confirma tu contraseña

### 1.3. Aceptar términos
- ✅ Acepta los "Terms of Service" y "Privacy Policy"
- Click en **"Sign Up"**

### 1.4. Verificar email (si es necesario)
- Revisa tu bandeja de entrada
- Haz clic en el enlace de verificación si te lo envían

---

## Paso 2: Configurar Email Service

Una vez dentro del dashboard:

### 2.1. Ir a "Email Services"
- En el menú lateral, busca **"Email Services"**
- O ve directamente a: **https://dashboard.emailjs.com/admin**

### 2.2. Agregar un nuevo servicio
1. Click en **"Add New Service"** o **"Create Service"**
2. Selecciona tu proveedor de email:
   - **Gmail** (recomendado, más fácil)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP** (para otros proveedores)

### 2.3. Si elegiste Gmail:
1. Te pedirá autorizar con Google
2. Selecciona tu cuenta de Gmail
3. Autoriza los permisos
4. **¡IMPORTANTE!** Copia el **Service ID** que aparece (ej: `service_abc123xyz`)
   - Se ve algo como: `service_xxxxxxxxx`
   - Guárdalo, lo necesitarás después

### 2.4. Si elegiste otro proveedor:
- Sigue las instrucciones específicas de cada proveedor
- Necesitarás configurar SMTP manualmente

---

## Paso 3: Crear Email Template

### 3.1. Ir a "Email Templates"
- En el menú lateral, busca **"Email Templates"**
- O ve a: **https://dashboard.emailjs.com/admin/template**

### 3.2. Crear nuevo template
1. Click en **"Create New Template"** o **"Add Template"**
2. Configura el template así:

#### **Template Name:**
```
Confirmación de Inscripción
```

#### **Subject (Asunto del email):**
```
Inscripción al plan: {{plan}}
```

#### **Content (Contenido del email):**
Puedes usar el editor visual o HTML. Aquí tienes ambas opciones:

**Opción 1: Editor Visual (más fácil)**
```
¡Hola {{nombre}}!

Gracias por inscribirte al plan {{plan}}.

Tu consulta: {{consulta}}

Nos pondremos en contacto con vos pronto.

¡Gracias por confiar!
```

**Opción 2: HTML (más profesional)**
```html
<p>¡Hola <strong>{{nombre}}</strong>!</p>
<p>Gracias por inscribirte al plan <strong>{{plan}}</strong>.</p>
<p>Tu consulta: {{consulta}}</p>
<p>Nos pondremos en contacto con vos pronto.</p>
<p>¡Gracias por confiar!</p>
```

### 3.3. Configurar variables
Asegúrate de que el template tenga estas variables (se crean automáticamente cuando las usas):
- `{{nombre}}` - Nombre del usuario
- `{{email}}` - Email del usuario
- `{{consulta}}` - Consulta del usuario
- `{{plan}}` - Plan seleccionado
- `{{to_email}}` - Email destino (opcional, para enviar al usuario)

### 3.4. Guardar y copiar Template ID
1. Click en **"Save"**
2. **¡IMPORTANTE!** Copia el **Template ID** (ej: `template_xyz789`)
   - Se ve algo como: `template_xxxxxxxxx`
   - Guárdalo, lo necesitarás después

---

## Paso 4: Obtener Public Key

### 4.1. Ir a "Account Settings"
- En el menú lateral, busca **"Account"** o **"General"**
- O ve a: **https://dashboard.emailjs.com/admin/integration**

### 4.2. Encontrar API Keys
1. Busca la sección **"API Keys"** o **"Public Key"**
2. **¡IMPORTANTE!** Copia tu **Public Key**
   - Se ve algo como: `abcdefghijklmnop` (una cadena de letras y números)
   - Guárdalo, lo necesitarás después

---

## Paso 5: Configurar Variables de Entorno

### 5.1. Crear archivo `.env.local`

En la carpeta `landing-page/`, crea un archivo llamado `.env.local` con este contenido:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

**Reemplazá:**
- `tu_service_id_aqui` → El Service ID que copiaste (ej: `service_abc123xyz`)
- `tu_template_id_aqui` → El Template ID que copiaste (ej: `template_xyz789`)
- `tu_public_key_aqui` → Tu Public Key (ej: `abcdefghijklmnop`)

### 5.2. Ejemplo real:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnop123456
```

---

## Paso 6: Probar el Formulario

### 6.1. Reiniciar el servidor de desarrollo
```bash
cd landing-page
npm run dev
```

### 6.2. Probar el formulario
1. Abre [http://localhost:3000](http://localhost:3000)
2. Navega hasta la sección "Planes"
3. Click en "Quiero inscribirme" en cualquier plan
4. Completa el formulario:
   - Nombre
   - Email
   - Consulta (opcional)
5. Click en "Enviar"

### 6.3. Verificar que funciona
- ✅ Deberías ver un alert: "¡Formulario enviado con éxito! Revisá tu email."
- ✅ Deberías recibir un email de confirmación en la dirección que ingresaste
- ✅ Si hay error, revisa la consola del navegador (F12)

---

## Paso 7: Configurar en DigitalOcean

Cuando hagas el deploy en DigitalOcean:

### 7.1. Ir a App Platform
1. Entra a tu app en DigitalOcean
2. Ve a **Settings** > **App-Level Environment Variables**

### 7.2. Agregar las 3 variables
Agrega cada una con su valor:

| Variable | Valor |
|----------|-------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_abc123xyz` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_xyz789` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `abcdefghijklmnop` |

### 7.3. Guardar y redeploy
- Click en **"Save"**
- DigitalOcean redeployará automáticamente

---

## 🐛 Solución de Problemas

### Error: "EmailJS no está configurado"
- ✅ Verifica que creaste el archivo `.env.local`
- ✅ Verifica que las variables empiezan con `NEXT_PUBLIC_`
- ✅ Reinicia el servidor (`npm run dev`)

### Error: "Invalid service ID"
- ✅ Verifica que copiaste bien el Service ID
- ✅ Asegúrate de que el servicio esté activo en EmailJS

### Error: "Invalid template ID"
- ✅ Verifica que copiaste bien el Template ID
- ✅ Asegúrate de que el template tenga las variables correctas

### No recibo emails
- ✅ Revisa la carpeta de spam
- ✅ Verifica que el email destino sea válido
- ✅ Revisa los logs en EmailJS Dashboard > Logs

### El formulario no envía
- ✅ Abre la consola del navegador (F12)
- ✅ Revisa si hay errores en rojo
- ✅ Verifica que las variables de entorno estén configuradas

---

## 📊 Límites del Plan Gratuito

- ✅ **200 emails/mes** gratis
- ✅ Sin tarjeta de crédito
- ✅ Sin límite de tiempo
- ✅ Perfecto para sitios pequeños/medianos

Si necesitás más, podés actualizar a un plan de pago desde el dashboard.

---

## ✅ Checklist Final

- [ ] Cuenta creada en EmailJS
- [ ] Email Service configurado (Gmail/Outlook/etc.)
- [ ] Service ID copiado
- [ ] Email Template creado con las variables correctas
- [ ] Template ID copiado
- [ ] Public Key copiada
- [ ] Archivo `.env.local` creado con las 3 variables
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Formulario probado y funcionando
- [ ] Email de confirmación recibido
- [ ] Variables configuradas en DigitalOcean (para producción)

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tu formulario debería funcionar perfectamente tanto en desarrollo como en producción.

Si tenés algún problema, revisá la sección "Solución de Problemas" o los logs en el dashboard de EmailJS.

