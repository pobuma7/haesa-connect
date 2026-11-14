# Supabase Setup Guide — Phase 1

This is Phase 1 only: creating the Supabase project itself. No database
tables, no connection to the live site, no deployment. That's Phase 2
onward, and each of those needs its own separate approval first.

Takes about 10 minutes.

---

## Step 1 — Create a Supabase account

1. Go to **[supabase.com](https://supabase.com)**.
2. Click **"Start your project"** (top right).
3. Sign up — easiest is "Continue with GitHub" if you have a GitHub
   account already (you do, from the site hosting setup); otherwise use
   email + password.

## Step 2 — Create an organization

Supabase groups projects under an "organization" — think of it as the
account umbrella for HAESA.

1. After signing in, you'll be prompted to create one if you don't have
   one yet. Click **"New organization"**.
2. Name: **HAESA** (or **HAESA CONNECT** — whichever you prefer; this is
   just a label, not shown to the public).
3. Type: choose **"Personal"** for now — this can be changed later if
   HAESA sets up a dedicated Supabase billing account.
4. Plan: **Free** — leave it selected, don't enter any payment details.
5. Click **"Create organization"**.

## Step 3 — Create the project

1. Click **"New project"**.
2. **Project name:** `haesa-connect`
3. **Database password:** click **"Generate a password"** — then
   **copy it somewhere safe immediately** (a password manager, or a
   private note). You won't be shown it again, and you'll need it if
   you ever connect a database tool directly (not needed for Phase 1,
   but worth saving now rather than regenerating later).
4. **Region:** select **"Central EU (Frankfurt)"** from the dropdown.
   *(This has been assessed against Nigeria/Africa-wide latency,
   reliability, long-term growth and data-residency — see Section 13
   of the integration plan for the full comparison.)*
5. Leave **"Postgres version"** on its default.
6. Click **"Create new project"**.

Supabase will take 1–2 minutes to provision the project. You'll land on
the project's dashboard once it's ready.

## Step 4 — Collect the two values Phase 1 needs

You only need two values right now — **not** the service-role key
(that's Phase 3, not yet).

1. In the project dashboard, click the **gear icon** (bottom left) →
   **"Project Settings"**.
2. Click **"Data API"** in the settings sidebar.
3. You'll see:
   - **Project URL** — looks like `https://abcdefghijklmnop.supabase.co`
   - **Project API keys** → the **`anon` / `public`** key (a long string
     starting with `eyJ...`)
4. Copy both of these.

**Do not copy the `service_role` key shown on the same page.** Leave it
alone for now — it isn't needed until Phase 3, and there's no reason for
it to leave the Supabase dashboard yet.

## Step 5 — Fill in your local `.env` file

1. In the project folder, copy `supabase/.env.example` to a new file
   named `supabase/.env` (same folder).
2. Open `supabase/.env` and paste in the two values from Step 4:
   ```
   SUPABASE_URL=https://abcdefghijklmnop.supabase.co
   SUPABASE_ANON_KEY=eyJ...your-anon-key...
   SUPABASE_SERVICE_ROLE_KEY=
   ```
   (Leave `SUPABASE_SERVICE_ROLE_KEY` blank — Phase 3 territory.)
3. **Make sure `.env` is in `.gitignore`** before you ever run `git add`
   in this folder, so it's never accidentally committed. If there's no
   `.gitignore` yet, create one containing just:
   ```
   .env
   ```

## Step 6 — Confirm, and share back

Once you've done the above, let me know and share:
- The **Project URL** (`https://....supabase.co`)
- The **anon key**

Do **not** send the database password or the service-role key — neither
is needed for Phase 1, and there's no reason for either to exist in this
conversation.

---

## What you should see when this is done

- [ ] A Supabase project named `haesa-connect`, region **Central EU
      (Frankfurt)**, visible in your dashboard
- [ ] A local `supabase/.env` file (not committed) with `SUPABASE_URL`
      and `SUPABASE_ANON_KEY` filled in
- [ ] No tables anywhere in the project except Supabase's own built-in
      `auth` schema — that's expected and correct for Phase 1
- [ ] Nothing on the live HAESA CONNECT site has changed

## What's deliberately *not* in this step

- No database tables (Phase 2)
- No Edge Functions or service-role key usage (Phase 3)
- No change to any existing site file
- No connection between the live site and this new project
- No cost — this is entirely within the free tier at zero usage

If anything above doesn't match, stop and flag it before moving on.
