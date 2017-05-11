<?php

/**
 * Контроллер CartController
 */
class SiteController {

    /**
     * Action для главной страницы
     */
    public function actionIndex() {
        // Список категорий для левого меню
        $categories = Category::getCategoriesList();

        // Список последних товаров
        $latestProducts = Product::getLatestProducts(6);

        // Список товаров для слайдера
        $sliderProducts = Product::getRecommendedProducts();

        // Подключаем вид
        require_once(ROOT . '/views/site/index.php');
        return true;
    }

    /**
     * Action для страницы "Контакты"
     */
    public function actionContact() {

        // Переменные для формы
        $userEmail = false;
        $userText = false;
        $result = false;

        // Обработка формы
        if (isset($_POST['submit'])) {
            // Если форма отправлена 
            // Получаем данные из формы
            $userEmail = $_POST['userEmail'];
            $userText = $_POST['userText'];

            // Флаг ошибок
            $errors = false;

            // Валидация полей
            if (!User::checkEmail($userEmail)) {
                $errors[] = 'Неправильный email';
            }

            if ($errors == false) {
                // Если ошибок нет
                // Отправляем письмо администратору 
                $adminEmail = 'innabaglai@i.ua';
                $message = "Текст: {$userText}. От {$userEmail}";
                $subject = 'Тема письма';
                $result = mail($adminEmail, $subject, $message);
                $result = true;
            }
        }

        // Подключаем вид
        require_once(ROOT . '/views/site/contact.php');
        return true;
    }

    /**
     * Action для страницы "О магазине"
     */
    public function actionAbout() {
        // Подключаем вид
        require_once(ROOT . '/views/site/about.php');
        return true;
    }

    /**
     * Action для страницы "Гарантия"
     */
    public function actionGuarantee() {
        // Подключаем вид
        require_once(ROOT . '/views/site/guarantee.php');
        return true;
    }

    /**
     * Action для страницы "Оплата и доставка"
     */
    public function actionDelivery() {
        // Подключаем вид
        require_once(ROOT . '/views/site/delivery.php');
        return true;
    }

    /**
     * Action для страницы "Производители"
     */
    public function actionProducers() {
        // Подключаем вид
        require_once(ROOT . '/views/site/producers.php');
        return true;
    }

    /**
     * Action для страницы "Спецпредложения"
     */
    public function actionDeals() {
        // Подключаем вид
        require_once(ROOT . '/views/site/deals.php');
        return true;
    }

}
