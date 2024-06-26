<li role="presentation" class="nav-item"><a class="nav-link active" href="#notifications" aria-controls="notifications" role="tab" data-bs-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/listchatconfig','Notifications about new chats');?></a></li>
<?php if ($currentUser->hasAccessTo('lhchat','administrateconfig')) : ?>
<li role="presentation" class="nav-item"><a class="nav-link" href="#copyright" aria-controls="copyright" role="tab" data-bs-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/listchatconfig','Copyright settings');?></a></li>
<li role="presentation" class="nav-item"><a class="nav-link" href="#onlinetracking" aria-controls="onlinetracking" role="tab" data-bs-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/listchatconfig','Online tracking');?></a></li>
<li role="presentation" class="nav-item"><a class="nav-link" href="#misc" aria-controls="misc" role="tab" data-bs-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/listchatconfig','Misc');?></a></li>
<li role="presentation" class="nav-item"><a class="nav-link" href="#visitoractivity" aria-controls="visitoractivity" role="tab" data-bs-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/listchatconfig','Visitor activity');?></a></li>
<li role="presentation" class="nav-item"><a class="nav-link" href="#workflow" aria-controls="workflow" role="tab" data-bs-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/listchatconfig','Workflow');?></a></li>
<?php include(erLhcoreClassDesign::designtpl('lhchat/listchatconfig/screen_sharing_tab.tpl.php'));?>
<?php include(erLhcoreClassDesign::designtpl('lhchat/listchatconfig/gdpr_tab.tpl.php'));?>
<?php endif;?>