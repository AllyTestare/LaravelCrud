1. am instalat laravel
composer create-project laravel/laravel example-app

cd example-app

2. Am creat baza de date "bd"

3. am downloadat breeze : curl -s https://laravel.build/example-app | bash

cd example-app

php artisan migrate

4. composer require laravel/breeze --dev

5. php artisan breeze:install

npm install && npm run dev
php artisan migrate

5.1 composer require laravel/ui
5.2 php artisan ui bootstrap
5.3 npm install && npm run dev


6. Instalez AdminLTE : https://github.com/ColorlibHQ/AdminLTE

composer require "almasaeed2010/adminlte=~3.1"

npm install admin-lte@^3.1 --save

NOTA : dupa instalare verificati ruta app\package.json pentru a verifica daca s-a instalat ""admin-lte": "^3.1.0" la ultima linie numita dependencies

NOTA 2 : Pentru a putea lucra cu pachetele instalate trebuie adaugate anumite linii in app\resources\js\bootstrap.js , se adauga sub " require('bootstrap'); " urmatoarea linie : "require('admin-lte');"

NOTA 2.1 : In app\resources\sass\app.scss se adauga urmatoarele linii : // AdminLTE
@import '~admin-lte/dist/css/adminlte.css';

Dupa rulam in cmd comanda npm run dev pentru a reactualiza cu ce am scris mai sus

7. Dupa instalarea Breez-ului, conexiunile pentru trimitere/primire emailurilor sunt default, pentru a avea functional sistemul de send/recieve email :

Setari -> in fisierul .env : 
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io (eu folosesc mailtrap.io)
MAIL_PORT=2525
MAIL_USERNAME= emailul tau
MAIL_PASSWORD= parola de la emailul tau
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=hello@example.com

Setari -> in fisierul mail.php (app/config/mail.php) : 
'mailers' => ['smtp' => [
            'transport' => 'smtp',
            'host' => env('MAIL_HOST', 'smtp.mailtrap.io'),
            'port' => env('MAIL_PORT', 2525)]


8. Atunci cand un User x se inregistreaza nu mai primeste email de confirmare sau daca uita parola nu primeste email de resetare parola, toate aceste setari trebuie activate : 

In app\routes\web.php adaugam 'verified' in arrayul de la middleware cod final : " ->middleware(['auth', 'verified'])->name('dashboard'); "

In app\Models\User.php la linia "class User extends Authenticatable" adaugam : implements MustVerifyEmail -> cod final "class User extends Authenticatable implements MustVerifyEmail"

9. Optional - modificarea numarului de attempturi la login cand incerci sa te loghezi si ai gresit parola - default este de 5x, eu il modific la x3 iar daca gresesti si a 4-a oara sa primesti un freeze de X secunde/minute

In app\Http\Requests\Auth\LoginRequest.php se modifica : public function ensureIsNotRateLimited()
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) -> 5 cu 3 si putin mai jos perioada de freeze 'minutes' => ceil($seconds / 60) in cat timp vrei tu.


10. Logo personalizat : 
Creaza un folder numit "images" nou in app\public , te duci in folderul creat pe windows "C:\laragon\www\example-app\public\images" si cu drag/drop pui imaginea de tip logo (de preferat .png) in folder.

10.1. Te duci in app\resources\views\components\application-logo.blade.php, sterge tot ce este acolo si adauga urmatoarea linie : <img src="{{ asset('images/logoD.png') }}" alt="Application logo" width="100px" /> unde "logoD.png" este numele imaginii tale.


11. Acum ma folosesc de AdminLTE instalat la pasul 6 pentru a adauga un design mai atragator pentru pagina Dashboard(home).

Creez un fisier nou numit master.blade.php in ruta app\resources\views\layouts si copiez un cod template (view-source:https://adminlte.io/themes/v3/starter.html) in fisierul creat master.blade.php

11.1. In master.blade.php scroll jos pana la ultimile linii pentru a sterge/modifica : se sterge ce se afla in <!-- jQuery --> si se adauga urmatoarea linie : <script src="asset('js/app.js"></script>

Ne intoarcem sus si se pot sterge si <!-- Google Font: Source Sans Pro -->/  <!-- Font Awesome Icons --> si <!-- Theme style --> si se adauga in locul lor urmatoarea linie : <link rel="stylesheet" href="{{ asset('css/app.css') }}">

12. Stilizare : https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers





