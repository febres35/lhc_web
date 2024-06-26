<?php

if (!$currentUser->validateCSFRToken($Params['user_parameters_unordered']['csfr'])) {
    die('Invalid CSFR Token');
    exit;
}

try {
    $item = erLhcoreClassModelMailconvMailingCampaignRecipient::fetch( $Params['user_parameters']['id']);
    $item->removeThis();
    erLhcoreClassModule::redirect('mailing/campaignrecipient','/(campaign)/' . $item->campaign_id);
    exit;
} catch (Exception $e) {
    $tpl = erLhcoreClassTemplate::getInstance('lhkernel/validation_error.tpl.php');
    $tpl->set('errors',array($e->getMessage()));
    $Result['content'] = $tpl->fetch();
}

?>