<div class="col-sm-3">
    <div class="left-sidebar">
        <h2>Каталог</h2>
        <div class="contents">
            <?php foreach ($categories as $categoryItem): ?>
                <div class="bmenu">

                    <h4 class="bmenu">
                        <a href="/category/<?php echo $categoryItem['id']; ?>">
                            <?php echo $categoryItem['name']; ?>
                        </a>
                    </h4>

                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>