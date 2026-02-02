# Cómo crear un Personal Access Token en GitHub

## Pasos para crear el token:

1. **Iniciá sesión en GitHub**
   - Andá a https://github.com/login
   - Ingresá con tu usuario `Luciano888`

2. **Accedé a la configuración de tokens**
   - Click en tu foto de perfil (arriba a la derecha)
   - Seleccioná **Settings** (Configuración)
   - O andá directamente a: https://github.com/settings/tokens

3. **Creá un nuevo token**
   - En el menú lateral izquierdo, buscá **Developer settings**
   - Click en **Personal access tokens**
   - Click en **Tokens (classic)**
   - Click en el botón **Generate new token**
   - Seleccioná **Generate new token (classic)**

4. **Configurá el token**
   - **Note** (Nota): Poné un nombre descriptivo, ej: "Push SofiaSanzFitness - Uso único"
   - **Expiration** (Expiración): Podés elegir:
     - `30 days` (30 días) - Recomendado para uso único
     - `90 days` (90 días)
     - `No expiration` (Sin expiración) - Solo si confiás en la seguridad
   - **Select scopes** (Seleccionar permisos): 
     - ✅ Marcá **`repo`** (esto da acceso completo a repositorios)
     - Esto incluye: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`

5. **Generá el token**
   - Scroll hacia abajo
   - Click en **Generate token** (botón verde)

6. **Copiá el token**
   - ⚠️ **IMPORTANTE**: GitHub solo te muestra el token UNA VEZ
   - Copiá el token inmediatamente (es una cadena larga de letras y números)
   - Guardalo en un lugar seguro temporalmente

## Uso del token:

Una vez que tengas el token, podés usarlo de dos formas:

### Opción A: Push con credenciales interactivas
```bash
cd landing-page
git push -u origin main
```
Cuando te pida:
- **Username**: `Luciano888`
- **Password**: `TU_TOKEN_AQUI` (pegá el token, NO tu contraseña de GitHub)

### Opción B: Push con token en la URL (más rápido)
```bash
cd landing-page
git remote set-url origin https://TU_TOKEN@github.com/Luciano888/SofiaSanzFitness.git
git push -u origin main
```

Luego, para limpiar y no dejar el token guardado:
```bash
git remote set-url origin https://github.com/Luciano888/SofiaSanzFitness.git
```

## Seguridad:

- El token es como una contraseña, no lo compartas
- Si lo perdés, podés revocarlo y crear uno nuevo
- Después de usarlo, podés eliminarlo desde: https://github.com/settings/tokens

