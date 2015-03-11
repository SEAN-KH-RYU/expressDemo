


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>expressDemo/jquery.js at master · tsiliopoulos/expressDemo</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="tsiliopoulos/expressDemo" name="twitter:title" /><meta content="Contribute to expressDemo development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/2666268?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/2666268?v=3&amp;s=400" property="og:image" /><meta content="tsiliopoulos/expressDemo" property="og:title" /><meta content="https://github.com/tsiliopoulos/expressDemo" property="og:url" /><meta content="Contribute to expressDemo development by creating an account on GitHub." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="AE778E0B:54E7:2758D29:54FFE209" name="octolytics-dimension-request_id" /><meta content="9116462" name="octolytics-actor-id" /><meta content="SEAN-KH-RYU" name="octolytics-actor-login" /><meta content="0461caca77872669835e13f3ec2316a5f65946ecc552788c7cc560c08e6d33cb" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="YWHCHJiaxiFdOXy3Mzyv24IMGfJjfPkDaGMita6xQX6JmvqCbHuICK+xKB4nmEUCJyJOp9oCt91azewVg25LOg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-928d6711d0e2b8553a8ad09c40303249229e43320d9ebd7fa17e5a3947767863.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-a78ffcd611fa838dd428775c4abac9e3f602d93466ef7d3d3ca9bad74ee8322a.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="7cd54a4987df96d3ab0ca1ae71687b4f">

      
  <meta name="description" content="Contribute to expressDemo development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/tsiliopoulos/expressDemo git https://github.com/tsiliopoulos/expressDemo.git">

  <meta content="2666268" name="octolytics-dimension-user_id" /><meta content="tsiliopoulos" name="octolytics-dimension-user_login" /><meta content="31957285" name="octolytics-dimension-repository_id" /><meta content="tsiliopoulos/expressDemo" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="31957285" name="octolytics-dimension-repository_network_root_id" /><meta content="tsiliopoulos/expressDemo" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/tsiliopoulos/expressDemo/commits/master.atom" rel="alternate" title="Recent Commits to expressDemo:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/tsiliopoulos/expressDemo/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/tsiliopoulos/expressDemo/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/SEAN-KH-RYU" data-ga-click="Header, go to profile, text:username">
      <img alt="Kyounghyun Ryu" class="avatar" data-user="9116462" height="20" src="https://avatars3.githubusercontent.com/u/9116462?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">SEAN-KH-RYU</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="tsiliopoulos/expressDemo">This repository</span>
    </li>
      <li>
        <a href="/tsiliopoulos/expressDemo/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="s3kCgAbvA3QJL8yUyb/2WW6umNVmNg2Jo1FUajCa4V+GjMid+q2+d3CwHDmr2iPYYgZC4vzIz9RoTrnCEZ9vGg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="84vQ8X5oAiRapnWH12oPnJ+YrqnMiEz0qEbAWqZvDLdSaEdkhyKM//qOlX0ZhvdsHrjgDYav6AfTL5W/jLA/rg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="31957285" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/tsiliopoulos/expressDemo/watchers">
          1
        </a>
        <a href="/tsiliopoulos/expressDemo/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/tsiliopoulos/expressDemo/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+LuAS9JU1rXbr4Ep3cd0G7gMNcovqPToxtPo+8/fiYAGqwPPy/G6YTq579P+/vQQHh47G50eRiFRhcMGmxoyjA==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar tsiliopoulos/expressDemo"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/tsiliopoulos/expressDemo/stargazers">
          0
        </a>
</form>
    <form accept-charset="UTF-8" action="/tsiliopoulos/expressDemo/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RrKU7MBlF2Y3ENxAXn225dma/ASyvcGvB9g+MfC4ccmlX36MHRCcd4ZYnSKf4ML8sUZ+PBfEvBIZOuOgHTTLjQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star tsiliopoulos/expressDemo"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/tsiliopoulos/expressDemo/stargazers">
          0
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/tsiliopoulos/expressDemo/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of tsiliopoulos/expressDemo to your account" aria-label="Fork your own copy of tsiliopoulos/expressDemo to your account" rel="facebox nofollow" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/tsiliopoulos/expressDemo/network" class="social-count">0</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/tsiliopoulos" class="url fn" itemprop="url" rel="author"><span itemprop="title">tsiliopoulos</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/tsiliopoulos/expressDemo" class="js-current-repository" data-pjax="#js-repo-pjax-container">expressDemo</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/tsiliopoulos/expressDemo/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/tsiliopoulos/expressDemo" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /tsiliopoulos/expressDemo">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/tsiliopoulos/expressDemo/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /tsiliopoulos/expressDemo/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/tsiliopoulos/expressDemo/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /tsiliopoulos/expressDemo/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/tsiliopoulos/expressDemo/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /tsiliopoulos/expressDemo/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/tsiliopoulos/expressDemo/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /tsiliopoulos/expressDemo/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/tsiliopoulos/expressDemo/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /tsiliopoulos/expressDemo/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/tsiliopoulos/expressDemo.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:tsiliopoulos/expressDemo.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/tsiliopoulos/expressDemo" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/tsiliopoulos/expressDemo" class="minibutton sidebar-button" title="Save tsiliopoulos/expressDemo to your computer and use it in GitHub Desktop." aria-label="Save tsiliopoulos/expressDemo to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/tsiliopoulos/expressDemo/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of tsiliopoulos/expressDemo as a zip file"
                   title="Download the contents of tsiliopoulos/expressDemo as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/tsiliopoulos/expressDemo/blob/2d3cf673bbad53cf7f7ac3e5fe7e40d97d4aaa17/public/javascripts/jquery.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f6578e14f9236fdfc9e1653c7946bd22 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/tsiliopoulos/expressDemo/blob/master/public/javascripts/jquery.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/tsiliopoulos/expressDemo/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tsiliopoulos/expressDemo" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">expressDemo</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tsiliopoulos/expressDemo/tree/master/public" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">public</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tsiliopoulos/expressDemo/tree/master/public/javascripts" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">javascripts</span></a></span><span class="separator">/</span><strong class="final-path">jquery.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/tsiliopoulos/expressDemo/contributors/master/public/javascripts/jquery.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="button-group">
        <a href="/tsiliopoulos/expressDemo/raw/master/public/javascripts/jquery.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/tsiliopoulos/expressDemo/blame/master/public/javascripts/jquery.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/tsiliopoulos/expressDemo/commits/master/public/javascripts/jquery.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/tsiliopoulos/expressDemo?branch=master&amp;filepath=public%2Fjavascripts%2Fjquery.js" aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/tsiliopoulos/expressDemo/edit/master/public/javascripts/jquery.js" aria-label="Clicking this button will fork this project so you can edit the file" class="tooltipped tooltipped-s inline-form edit-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QqaFtzAw7ZCIgZG1vXvbcPYC09ak7FPRWAI4h0UJMUmXDvQyap/hk4uZh3bdbJ22hd5MfRgxOaftMG+mQaAAPw==" /></div>
              <button class="web-edit-button"
                      type="submit"
                      data-hotkey="e"
                      data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/tsiliopoulos/expressDemo/delete/master/public/javascripts/jquery.js" aria-label="Fork this project and delete file" class="tooltipped tooltipped-s inline-form delete-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="f9TmIInmA7Qk3URPwCo/Hp95FeX+x7qkoVXFbrTN4jOcRgV7o7xtz5FOdgtdZ52iQf3EtRVf+kdU5SwdS3WrDg==" /></div>
            <button class="web-edit-button"
                    type="submit"
                    data-disable-with>
              <span class="octicon octicon-trashcan "></span>
            </button>
</form>      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        27 lines (26 sloc)
        <span class="file-info-divider"></span>
      84.621 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * jQuery JavaScript Library v2.1.1</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * http://jquery.com/</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * Includes Sizzle.js</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * http://sizzlejs.com/</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> * Released under the MIT license</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c"> * http://jquery.org/license</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c"> * Date: 2014-05-01T17:11Z</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">!function(a,b){&quot;object&quot;==typeof module&amp;&amp;&quot;object&quot;==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(&quot;jQuery requires a window with a document&quot;);return b(a)}:b(a)}(&quot;undefined&quot;!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return&quot;function&quot;===c||_.isWindow(a)?!1:1===a.nodeType&amp;&amp;b?!0:&quot;array&quot;===c||0===b||&quot;number&quot;==typeof b&amp;&amp;b&gt;0&amp;&amp;b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if(&quot;string&quot;==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)&gt;=0!==c})}function e(a,b){for(;(a=a[b])&amp;&amp;1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener(&quot;DOMContentLoaded&quot;,g,!1),a.removeEventListener(&quot;load&quot;,g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&amp;&amp;1===a.nodeType)if(d=&quot;data-&quot;+b.replace(ub,&quot;-$1&quot;).toLowerCase(),c=a.getAttribute(d),&quot;string&quot;==typeof c){try{c=&quot;true&quot;===c?!0:&quot;false&quot;===c?!1:&quot;null&quot;===c?null:+c+&quot;&quot;===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,&quot;table&quot;)&amp;&amp;_.nodeName(11!==b.nodeType?b:b.firstChild,&quot;tr&quot;)?a.getElementsByTagName(&quot;tbody&quot;)[0]||a.appendChild(a.ownerDocument.createElement(&quot;tbody&quot;)):a}function n(a){return a.type=(null!==a.getAttribute(&quot;type&quot;))+&quot;/&quot;+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute(&quot;type&quot;),a}function p(a,b){for(var c=0,d=a.length;d&gt;c;c++)rb.set(a[c],&quot;globalEval&quot;,!b||rb.get(b[c],&quot;globalEval&quot;))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&amp;&amp;(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d&gt;c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&amp;&amp;(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||&quot;*&quot;):a.querySelectorAll?a.querySelectorAll(b||&quot;*&quot;):[];return void 0===b||b&amp;&amp;_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();&quot;input&quot;===c&amp;&amp;yb.test(a.type)?b.checked=a.checked:(&quot;input&quot;===c||&quot;textarea&quot;===c)&amp;&amp;(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&amp;&amp;(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],&quot;display&quot;);return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),&quot;none&quot;!==c&amp;&amp;c||(Nb=(Nb||_(&quot;&lt;iframe frameborder=&#39;0&#39; width=&#39;0&#39; height=&#39;0&#39;/&gt;&quot;)).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&amp;&amp;(g=c.getPropertyValue(b)||c[b]),c&amp;&amp;(&quot;&quot;!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&amp;&amp;Pb.test(b)&amp;&amp;(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+&quot;&quot;:g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||&quot;px&quot;):b}function z(a,b,c,d,e){for(var f=c===(d?&quot;border&quot;:&quot;content&quot;)?4:&quot;width&quot;===b?1:0,g=0;4&gt;f;f+=2)&quot;margin&quot;===c&amp;&amp;(g+=_.css(a,c+wb[f],!0,e)),d?(&quot;content&quot;===c&amp;&amp;(g-=_.css(a,&quot;padding&quot;+wb[f],!0,e)),&quot;margin&quot;!==c&amp;&amp;(g-=_.css(a,&quot;border&quot;+wb[f]+&quot;Width&quot;,!0,e))):(g+=_.css(a,&quot;padding&quot;+wb[f],!0,e),&quot;padding&quot;!==c&amp;&amp;(g+=_.css(a,&quot;border&quot;+wb[f]+&quot;Width&quot;,!0,e)));return g}function A(a,b,c){var d=!0,e=&quot;width&quot;===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g=&quot;border-box&quot;===_.css(a,&quot;boxSizing&quot;,!1,f);if(0&gt;=e||null==e){if(e=v(a,b,f),(0&gt;e||null==e)&amp;&amp;(e=a.style[b]),Qb.test(e))return e;d=g&amp;&amp;(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?&quot;border&quot;:&quot;content&quot;),d,f)+&quot;px&quot;}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h&gt;g;g++)d=a[g],d.style&amp;&amp;(f[g]=rb.get(d,&quot;olddisplay&quot;),c=d.style.display,b?(f[g]||&quot;none&quot;!==c||(d.style.display=&quot;&quot;),&quot;&quot;===d.style.display&amp;&amp;xb(d)&amp;&amp;(f[g]=rb.access(d,&quot;olddisplay&quot;,u(d.nodeName)))):(e=xb(d),&quot;none&quot;===c&amp;&amp;e||rb.set(d,&quot;olddisplay&quot;,e?c:_.css(d,&quot;display&quot;))));for(g=0;h&gt;g;g++)d=a[g],d.style&amp;&amp;(b&amp;&amp;&quot;none&quot;!==d.style.display&amp;&amp;&quot;&quot;!==d.style.display||(d.style.display=b?f[g]||&quot;&quot;:&quot;none&quot;));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4&gt;d;d+=2-b)c=wb[d],e[&quot;margin&quot;+c]=e[&quot;padding&quot;+c]=a;return b&amp;&amp;(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc[&quot;*&quot;]),f=0,g=e.length;g&gt;f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&amp;&amp;xb(a),p=rb.get(a,&quot;fxshow&quot;);c.queue||(h=_._queueHooks(a,&quot;fx&quot;),null==h.unqueued&amp;&amp;(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,&quot;fx&quot;).length||h.empty.fire()})})),1===a.nodeType&amp;&amp;(&quot;height&quot;in b||&quot;width&quot;in b)&amp;&amp;(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,&quot;display&quot;),k=&quot;none&quot;===j?rb.get(a,&quot;olddisplay&quot;)||u(a.nodeName):j,&quot;inline&quot;===k&amp;&amp;&quot;none&quot;===_.css(a,&quot;float&quot;)&amp;&amp;(n.display=&quot;inline-block&quot;)),c.overflow&amp;&amp;(n.overflow=&quot;hidden&quot;,l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||&quot;toggle&quot;===e,e===(o?&quot;hide&quot;:&quot;show&quot;)){if(&quot;show&quot;!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&amp;&amp;p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))&quot;inline&quot;===(&quot;none&quot;===j?u(a.nodeName):j)&amp;&amp;(n.display=j);else{p?&quot;hidden&quot;in p&amp;&amp;(o=p.hidden):p=rb.access(a,&quot;fxshow&quot;,{}),f&amp;&amp;(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,&quot;fxshow&quot;);for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&amp;&amp;(g.end=g.start,g.start=&quot;width&quot;===d||&quot;height&quot;===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&amp;&amp;(e=f[1],f=a[c]=f[0]),c!==d&amp;&amp;(a[d]=f,delete a[c]),g=_.cssHooks[d],g&amp;&amp;&quot;expand&quot;in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i&gt;g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1&gt;f&amp;&amp;i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d&gt;c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g&gt;f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&amp;&amp;j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){&quot;string&quot;!=typeof b&amp;&amp;(c=b,b=&quot;*&quot;);var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)&quot;+&quot;===d[0]?(d=d.slice(1)||&quot;*&quot;,(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return&quot;string&quot;!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f[&quot;*&quot;]&amp;&amp;e(&quot;*&quot;)}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&amp;&amp;((e[c]?a:d||(d={}))[c]=b[c]);return d&amp;&amp;_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;&quot;*&quot;===i[0];)i.shift(),void 0===d&amp;&amp;(d=a.mimeType||b.getResponseHeader(&quot;Content-Type&quot;));if(d)for(e in h)if(h[e]&amp;&amp;h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+&quot; &quot;+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&amp;&amp;i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&amp;&amp;(c[a.responseFields[f]]=b),!i&amp;&amp;d&amp;&amp;a.dataFilter&amp;&amp;(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(&quot;*&quot;===f)f=i;else if(&quot;*&quot;!==i&amp;&amp;i!==f){if(g=j[i+&quot; &quot;+f]||j[&quot;* &quot;+f],!g)for(e in j)if(h=e.split(&quot; &quot;),h[1]===f&amp;&amp;(g=j[i+&quot; &quot;+h[0]]||j[&quot;* &quot;+h[0]])){g===!0?g=j[e]:j[e]!==!0&amp;&amp;(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&amp;&amp;a[&quot;throws&quot;])b=g(b);else try{b=g(b)}catch(l){return{state:&quot;parsererror&quot;,error:g?l:&quot;No conversion from &quot;+i+&quot; to &quot;+f}}}return{state:&quot;success&quot;,data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+&quot;[&quot;+(&quot;object&quot;==typeof e?b:&quot;&quot;)+&quot;]&quot;,e,c,d)});else if(c||&quot;object&quot;!==_.type(b))d(a,b);else for(e in b)O(a+&quot;[&quot;+e+&quot;]&quot;,b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&amp;&amp;a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$=&quot;2.1.1&quot;,_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:&quot;&quot;,length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0&gt;a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0&gt;a?b:0);return this.pushStack(c&gt;=0&amp;&amp;b&gt;c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(&quot;boolean&quot;==typeof g&amp;&amp;(j=g,g=arguments[h]||{},h++),&quot;object&quot;==typeof g||_.isFunction(g)||(g={}),h===i&amp;&amp;(g=this,h--);i&gt;h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&amp;&amp;(j&amp;&amp;d&amp;&amp;(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&amp;&amp;_.isArray(c)?c:[]):f=c&amp;&amp;_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&amp;&amp;(g[b]=d));return g},_.extend({expando:&quot;jQuery&quot;+($+Math.random()).replace(/\D/g,&quot;&quot;),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return&quot;function&quot;===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&amp;&amp;a===a.window},isNumeric:function(a){return!_.isArray(a)&amp;&amp;a-parseFloat(a)&gt;=0},isPlainObject:function(a){return&quot;object&quot;!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&amp;&amp;!X.call(a.constructor.prototype,&quot;isPrototypeOf&quot;)?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+&quot;&quot;:&quot;object&quot;==typeof a||&quot;function&quot;==typeof a?V[W.call(a)]||&quot;object&quot;:typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&amp;&amp;(1===a.indexOf(&quot;use strict&quot;)?(b=Z.createElement(&quot;script&quot;),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,&quot;ms-&quot;).replace(cb,db)},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g&gt;f&amp;&amp;(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g&gt;f&amp;&amp;(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?&quot;&quot;:(a+&quot;&quot;).replace(ab,&quot;&quot;)},makeArray:function(a,b){var d=b||[];return null!=a&amp;&amp;(c(Object(a))?_.merge(d,&quot;string&quot;==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c&gt;d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g&gt;f;f++)d=!b(a[f],f),d!==h&amp;&amp;e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g&gt;f;f++)e=b(a[f],f,d),null!=e&amp;&amp;i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&amp;&amp;i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return&quot;string&quot;==typeof b&amp;&amp;(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each(&quot;Boolean Number String Function Array Date RegExp Object Error&quot;.split(&quot; &quot;),function(a,b){V[&quot;[object &quot;+b+&quot;]&quot;]=b.toLowerCase()});var eb=/*!</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"> <span class="pl-k">*</span> Sizzle CSS Selector Engine v1.<span class="pl-c1">10.19</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"> <span class="pl-k">*</span> http<span class="pl-k">:</span><span class="pl-c">//sizzlejs.com/</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"> <span class="pl-k">*</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"> <span class="pl-k">*</span> Copyright <span class="pl-c1">2013</span> jQuery Foundation, Inc. and other contributors</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"> <span class="pl-k">*</span> Released under the MIT license</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"> <span class="pl-k">*</span> http<span class="pl-k">:</span><span class="pl-c">//jquery.org/license</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"> <span class="pl-k">*</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"> <span class="pl-k">*</span> <span class="pl-s3">Date</span><span class="pl-k">:</span> <span class="pl-c1">2014</span><span class="pl-k">-</span><span class="pl-c1">04</span><span class="pl-k">-</span><span class="pl-c1">18</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line"> <span class="pl-k">*</span>/</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&amp;&amp;F(b),b=b||G,c=c||[],!a||&quot;string&quot;!=typeof a)return c;if(1!==(h=b.nodeType)&amp;&amp;9!==h)return[];if(I&amp;&amp;!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&amp;&amp;(f=b.ownerDocument.getElementById(g))&amp;&amp;M(b,f)&amp;&amp;f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&amp;&amp;v.getElementsByClassName&amp;&amp;b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&amp;&amp;(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&amp;&amp;a,1===h&amp;&amp;&quot;object&quot;!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute(&quot;id&quot;))?n=l.replace(ub,&quot;\\$&amp;&quot;):b.setAttribute(&quot;id&quot;,n),n=&quot;[id=&#39;&quot;+n+&quot;&#39;] &quot;,i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&amp;&amp;k(b.parentNode)||b,p=j.join(&quot;,&quot;)}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute(&quot;id&quot;)}}}return B(a.replace(ib,&quot;$1&quot;),b,c,d)}function c(){function a(c,d){return b.push(c+&quot; &quot;)&gt;w.cacheLength&amp;&amp;delete a[b.shift()],a[c+&quot; &quot;]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement(&quot;div&quot;);try{return!!a(b)}catch(c){return!1}finally{b.parentNode&amp;&amp;b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split(&quot;|&quot;),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&amp;&amp;a,d=c&amp;&amp;1===a.nodeType&amp;&amp;1===b.nodeType&amp;&amp;(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return&quot;input&quot;===c&amp;&amp;b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return(&quot;input&quot;===c||&quot;button&quot;===c)&amp;&amp;b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&amp;&amp;(c[e]=!(d[e]=c[e]))})})}function k(a){return a&amp;&amp;typeof a.getElementsByTagName!==V&amp;&amp;a}function l(){}function m(a){for(var b=0,c=a.length,d=&quot;&quot;;c&gt;b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&amp;&amp;&quot;parentNode&quot;===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&amp;&amp;a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&amp;&amp;h[0]===P&amp;&amp;h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length&gt;1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f&gt;e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i&gt;h;h++)(f=a[h])&amp;&amp;(!c||c(f,d,e))&amp;&amp;(g.push(f),j&amp;&amp;b.push(h));return g}function r(a,b,c,e,f,g){return e&amp;&amp;!e[N]&amp;&amp;(e=r(e)),f&amp;&amp;!f[N]&amp;&amp;(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||&quot;*&quot;,h.nodeType?[h]:h,[]),s=!a||!d&amp;&amp;b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&amp;&amp;c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&amp;&amp;(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&amp;&amp;j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&amp;&amp;(j=f?bb.call(d,l):m[k])&gt;-1&amp;&amp;(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[&quot; &quot;],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)&gt;-1},g,!0),k=[function(a,c,d){return!f&amp;&amp;(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e&gt;h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e&gt;d&amp;&amp;!w.relative[a[d].type];d++);return r(h&gt;1&amp;&amp;o(k),h&gt;1&amp;&amp;m(a.slice(0,h-1).concat({value:&quot; &quot;===a[h-2].type?&quot;*&quot;:&quot;&quot;})).replace(ib,&quot;$1&quot;),c,d&gt;h&amp;&amp;s(a.slice(h,d)),e&gt;d&amp;&amp;s(a=a.slice(d)),e&gt;d&amp;&amp;m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length&gt;0,f=a.length&gt;0,g=function(d,g,h,i,j){var k,l,m,n=0,o=&quot;0&quot;,p=d&amp;&amp;[],r=[],s=C,t=d||f&amp;&amp;w.find.TAG(&quot;*&quot;,j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&amp;&amp;(C=g!==G&amp;&amp;g);o!==v&amp;&amp;null!=(k=t[o]);o++){if(f&amp;&amp;k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&amp;&amp;(P=u)}e&amp;&amp;((k=!m&amp;&amp;k)&amp;&amp;n--,d&amp;&amp;p.push(k))}if(n+=o,e&amp;&amp;o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n&gt;0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&amp;&amp;!d&amp;&amp;r.length&gt;0&amp;&amp;n+c.length&gt;1&amp;&amp;b.uniqueSort(i)}return j&amp;&amp;(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N=&quot;sizzle&quot;+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&amp;&amp;(E=!0),0},V=&quot;undefined&quot;,W=1&lt;&lt;31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c&gt;b;b++)if(this[b]===a)return b;return-1},cb=&quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;,db=&quot;[\\x20\\t\\r\\n\\f]&quot;,eb=&quot;(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+&quot;,fb=eb.replace(&quot;w&quot;,&quot;w#&quot;),gb=&quot;\\[&quot;+db+&quot;*(&quot;+eb+&quot;)(?:&quot;+db+&quot;*([*^$|!~]?=)&quot;+db+&quot;*(?:&#39;((?:\\\\.|[^\\\\&#39;])*)&#39;|\&quot;((?:\\\\.|[^\\\\\&quot;])*)\&quot;|(&quot;+fb+&quot;))|)&quot;+db+&quot;*\\]&quot;,hb=&quot;:(&quot;+eb+&quot;)(?:\\(((&#39;((?:\\\\.|[^\\\\&#39;])*)&#39;|\&quot;((?:\\\\.|[^\\\\\&quot;])*)\&quot;)|((?:\\\\.|[^\\\\()[\\]]|&quot;+gb+&quot;)*)|.*)\\)|)&quot;,ib=new RegExp(&quot;^&quot;+db+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+db+&quot;+$&quot;,&quot;g&quot;),jb=new RegExp(&quot;^&quot;+db+&quot;*,&quot;+db+&quot;*&quot;),kb=new RegExp(&quot;^&quot;+db+&quot;*([&gt;+~]|&quot;+db+&quot;)&quot;+db+&quot;*&quot;),lb=new RegExp(&quot;=&quot;+db+&quot;*([^\\]&#39;\&quot;]*?)&quot;+db+&quot;*\\]&quot;,&quot;g&quot;),mb=new RegExp(hb),nb=new RegExp(&quot;^&quot;+fb+&quot;$&quot;),ob={ID:new RegExp(&quot;^#(&quot;+eb+&quot;)&quot;),CLASS:new RegExp(&quot;^\\.(&quot;+eb+&quot;)&quot;),TAG:new RegExp(&quot;^(&quot;+eb.replace(&quot;w&quot;,&quot;w*&quot;)+&quot;)&quot;),ATTR:new RegExp(&quot;^&quot;+gb),PSEUDO:new RegExp(&quot;^&quot;+hb),CHILD:new RegExp(&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot;+db+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+db+&quot;*(?:([+-]|)&quot;+db+&quot;*(\\d+)|))&quot;+db+&quot;*\\)|)&quot;,&quot;i&quot;),bool:new RegExp(&quot;^(?:&quot;+cb+&quot;)$&quot;,&quot;i&quot;),needsContext:new RegExp(&quot;^&quot;+db+&quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;+db+&quot;*((?:-\\d)?\\d*)&quot;+db+&quot;*\\)|)(?=[^-]|$)&quot;,&quot;i&quot;)},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/&#39;|\\/g,vb=new RegExp(&quot;\\\\([\\da-f]{1,6}&quot;+db+&quot;?|(&quot;+db+&quot;)|.)&quot;,&quot;ig&quot;),wb=function(a,b,c){var d=&quot;0x&quot;+b-65536;return d!==d||c?b:0&gt;d?String.fromCharCode(d+65536):String.fromCharCode(d&gt;&gt;10|55296,1023&amp;d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&amp;&amp;(a.ownerDocument||a).documentElement;return b?&quot;HTML&quot;!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&amp;&amp;9===c.nodeType&amp;&amp;c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&amp;&amp;d!==d.top&amp;&amp;(d.addEventListener?d.addEventListener(&quot;unload&quot;,function(){F()},!1):d.attachEvent&amp;&amp;d.attachEvent(&quot;onunload&quot;,function(){F()})),v.attributes=e(function(a){return a.className=&quot;i&quot;,!a.getAttribute(&quot;className&quot;)}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment(&quot;&quot;)),!a.getElementsByTagName(&quot;*&quot;).length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&amp;&amp;e(function(a){return a.innerHTML=&quot;&lt;div class=&#39;a&#39;&gt;&lt;/div&gt;&lt;div class=&#39;a i&#39;&gt;&lt;/div&gt;&quot;,a.firstChild.className=&quot;i&quot;,2===a.getElementsByClassName(&quot;i&quot;).length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&amp;&amp;I){var c=b.getElementById(a);return c&amp;&amp;c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute(&quot;id&quot;)===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&amp;&amp;a.getAttributeNode(&quot;id&quot;);return c&amp;&amp;c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(&quot;*&quot;===a){for(;c=f[e++];)1===c.nodeType&amp;&amp;d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&amp;&amp;function(a,b){return typeof b.getElementsByClassName!==V&amp;&amp;I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&amp;&amp;(e(function(a){a.innerHTML=&quot;&lt;select msallowclip=&#39;&#39;&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;,a.querySelectorAll(&quot;[msallowclip^=&#39;&#39;]&quot;).length&amp;&amp;J.push(&quot;[*^$]=&quot;+db+&quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;),a.querySelectorAll(&quot;[selected]&quot;).length||J.push(&quot;\\[&quot;+db+&quot;*(?:value|&quot;+cb+&quot;)&quot;),a.querySelectorAll(&quot;:checked&quot;).length||J.push(&quot;:checked&quot;)}),e(function(a){var b=c.createElement(&quot;input&quot;);b.setAttribute(&quot;type&quot;,&quot;hidden&quot;),a.appendChild(b).setAttribute(&quot;name&quot;,&quot;D&quot;),a.querySelectorAll(&quot;[name=d]&quot;).length&amp;&amp;J.push(&quot;name&quot;+db+&quot;*[*^$|!~]?=&quot;),a.querySelectorAll(&quot;:enabled&quot;).length||J.push(&quot;:enabled&quot;,&quot;:disabled&quot;),a.querySelectorAll(&quot;*,:x&quot;),J.push(&quot;,.*:&quot;)})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&amp;&amp;e(function(a){v.disconnectedMatch=L.call(a,&quot;div&quot;),L.call(a,&quot;[s!=&#39;&#39;]:x&quot;),K.push(&quot;!=&quot;,hb)}),J=J.length&amp;&amp;new RegExp(J.join(&quot;|&quot;)),K=K.length&amp;&amp;new RegExp(K.join(&quot;|&quot;)),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&amp;&amp;b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&amp;&amp;16&amp;a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&amp;d||!v.sortDetached&amp;&amp;b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&amp;&amp;M(O,a)?-1:b===c||b.ownerDocument===O&amp;&amp;M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&amp;d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&amp;&amp;F(a),c=c.replace(lb,&quot;=&#39;$1&#39;]&quot;),!(!v.matchesSelector||!I||K&amp;&amp;K.test(c)||J&amp;&amp;J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&amp;&amp;11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length&gt;0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&amp;&amp;F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&amp;&amp;F(a);var c=w.attrHandle[b.toLowerCase()],d=c&amp;&amp;X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&amp;&amp;d.specified?d.value:null},b.error=function(a){throw new Error(&quot;Syntax error, unrecognized expression: &quot;+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&amp;&amp;a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&amp;&amp;(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c=&quot;&quot;,d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if(&quot;string&quot;==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||&quot;&quot;).replace(vb,wb),&quot;~=&quot;===a[2]&amp;&amp;(a[3]=&quot; &quot;+a[3]+&quot; &quot;),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),&quot;nth&quot;===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(&quot;even&quot;===a[3]||&quot;odd&quot;===a[3])),a[5]=+(a[7]+a[8]||&quot;odd&quot;===a[3])):a[3]&amp;&amp;b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&amp;&amp;a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||&quot;&quot;:c&amp;&amp;mb.test(c)&amp;&amp;(b=z(c,!0))&amp;&amp;(b=c.indexOf(&quot;)&quot;,c.length-b)-c.length)&amp;&amp;(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return&quot;*&quot;===a?function(){return!0}:function(a){return a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+&quot; &quot;];return b||(b=new RegExp(&quot;(^|&quot;+db+&quot;)&quot;+a+&quot;(&quot;+db+&quot;|$)&quot;))&amp;&amp;R(a,function(a){return b.test(&quot;string&quot;==typeof a.className&amp;&amp;a.className||typeof a.getAttribute!==V&amp;&amp;a.getAttribute(&quot;class&quot;)||&quot;&quot;)})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?&quot;!=&quot;===c:c?(f+=&quot;&quot;,&quot;=&quot;===c?f===d:&quot;!=&quot;===c?f!==d:&quot;^=&quot;===c?d&amp;&amp;0===f.indexOf(d):&quot;*=&quot;===c?d&amp;&amp;f.indexOf(d)&gt;-1:&quot;$=&quot;===c?d&amp;&amp;f.slice(-d.length)===d:&quot;~=&quot;===c?(&quot; &quot;+f+&quot; &quot;).indexOf(d)&gt;-1:&quot;|=&quot;===c?f===d||f.slice(0,d.length+1)===d+&quot;-&quot;:!1):!0}},CHILD:function(a,b,c,d,e){var f=&quot;nth&quot;!==a.slice(0,3),g=&quot;last&quot;!==a.slice(-4),h=&quot;of-type&quot;===b;return 1===d&amp;&amp;0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?&quot;nextSibling&quot;:&quot;previousSibling&quot;,q=b.parentNode,r=h&amp;&amp;b.nodeName.toLowerCase(),s=!i&amp;&amp;!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p=&quot;only&quot;===a&amp;&amp;!o&amp;&amp;&quot;nextSibling&quot;}return!0}if(o=[g?q.firstChild:q.lastChild],g&amp;&amp;s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&amp;&amp;j[1],m=j[0]===P&amp;&amp;j[2],l=n&amp;&amp;q.childNodes[n];l=++n&amp;&amp;l&amp;&amp;l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&amp;&amp;++m&amp;&amp;l===b){k[a]=[P,n,m];break}}else if(s&amp;&amp;(j=(b[N]||(b[N]={}))[a])&amp;&amp;j[0]===P)m=j[1];else for(;(l=++n&amp;&amp;l&amp;&amp;l[p]||(m=n=0)||o.pop())&amp;&amp;((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&amp;&amp;((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&amp;&amp;m/d&gt;=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error(&quot;unsupported pseudo: &quot;+a);return f[N]?f(c):f.length&gt;1?(e=[a,a,&quot;&quot;,c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,&quot;$1&quot;));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&amp;&amp;(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length&gt;0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)&gt;-1}}),lang:d(function(a){return nb.test(a||&quot;&quot;)||b.error(&quot;unsupported lang: &quot;+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute(&quot;xml:lang&quot;)||b.getAttribute(&quot;lang&quot;))return c=c.toLowerCase(),c===a||0===c.indexOf(a+&quot;-&quot;);while((b=b.parentNode)&amp;&amp;1===b.nodeType);return!1}}),target:function(b){var c=a.location&amp;&amp;a.location.hash;return c&amp;&amp;c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&amp;&amp;(!G.hasFocus||G.hasFocus())&amp;&amp;!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return&quot;input&quot;===b&amp;&amp;!!a.checked||&quot;option&quot;===b&amp;&amp;!!a.selected},selected:function(a){return a.parentNode&amp;&amp;a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType&lt;6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return&quot;input&quot;===b&amp;&amp;&quot;button&quot;===a.type||&quot;button&quot;===b},text:function(a){var b;return&quot;input&quot;===a.nodeName.toLowerCase()&amp;&amp;&quot;text&quot;===a.type&amp;&amp;(null==(b=a.getAttribute(&quot;type&quot;))||&quot;text&quot;===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0&gt;c?c+b:c]}),even:j(function(a,b){for(var c=0;b&gt;c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b&gt;c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0&gt;c?c+b:c;--d&gt;=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0&gt;c?c+b:c;++d&lt;b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+&quot; &quot;];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&amp;&amp;(e&amp;&amp;(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&amp;&amp;(d=e.shift(),f.push({value:d,type:e[0].replace(ib,&quot; &quot;)}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&amp;&amp;!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+&quot; &quot;];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j=&quot;function&quot;==typeof a&amp;&amp;a,l=!d&amp;&amp;z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length&gt;2&amp;&amp;&quot;ID&quot;===(g=f[0]).type&amp;&amp;v.getById&amp;&amp;9===b.nodeType&amp;&amp;I&amp;&amp;w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&amp;&amp;(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&amp;&amp;(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&amp;&amp;(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&amp;&amp;k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&amp;&amp;m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&amp;&amp;k(b.parentNode)||b),c},v.sortStable=N.split(&quot;&quot;).sort(U).join(&quot;&quot;)===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&amp;a.compareDocumentPosition(G.createElement(&quot;div&quot;))}),e(function(a){return a.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,&quot;#&quot;===a.firstChild.getAttribute(&quot;href&quot;)})||f(&quot;type|href|height|width&quot;,function(a,b,c){return c?void 0:a.getAttribute(b,&quot;type&quot;===b.toLowerCase()?1:2)}),v.attributes&amp;&amp;e(function(a){return a.innerHTML=&quot;&lt;input/&gt;&quot;,a.firstChild.setAttribute(&quot;value&quot;,&quot;&quot;),&quot;&quot;===a.firstChild.getAttribute(&quot;value&quot;)})||f(&quot;value&quot;,function(a,b,c){return c||&quot;input&quot;!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute(&quot;disabled&quot;)})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&amp;&amp;d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[&quot;:&quot;]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&amp;&amp;(a=&quot;:not(&quot;+a+&quot;)&quot;),1===b.length&amp;&amp;1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if(&quot;string&quot;!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c&gt;b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c&gt;b;b++)_.find(a,e[b],d);return d=this.pushStack(c&gt;1?_.unique(d):d),d.selector=this.selector?this.selector+&quot; &quot;+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,&quot;string&quot;==typeof a&amp;&amp;fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if(&quot;string&quot;==typeof a){if(c=&quot;&lt;&quot;===a[0]&amp;&amp;&quot;&gt;&quot;===a[a.length-1]&amp;&amp;a.length&gt;=3?[null,a,null]:jb.exec(a),!c||!c[1]&amp;&amp;b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&amp;&amp;b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&amp;&amp;_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&amp;&amp;d.parentNode&amp;&amp;(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?&quot;undefined&quot;!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&amp;&amp;(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&amp;&amp;9!==a.nodeType;)if(1===a.nodeType){if(e&amp;&amp;_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&amp;&amp;a!==b&amp;&amp;c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c&gt;a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||&quot;string&quot;!=typeof a?_(a,b||this.context):0;e&gt;d;d++)for(c=this[d];c&amp;&amp;c!==b;c=c.parentNode)if(c.nodeType&lt;11&amp;&amp;(g?g.index(c)&gt;-1:1===c.nodeType&amp;&amp;_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length&gt;1?_.unique(f):f)},index:function(a){return a?&quot;string&quot;==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&amp;&amp;this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;11!==b.nodeType?b:null},parents:function(a){return _.dir(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,c){return _.dir(a,&quot;parentNode&quot;,c)},next:function(a){return e(a,&quot;nextSibling&quot;)},prev:function(a){return e(a,&quot;previousSibling&quot;)},nextAll:function(a){return _.dir(a,&quot;nextSibling&quot;)},prevAll:function(a){return _.dir(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,c){return _.dir(a,&quot;nextSibling&quot;,c)},prevUntil:function(a,b,c){return _.dir(a,&quot;previousSibling&quot;,c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return&quot;Until&quot;!==a.slice(-5)&amp;&amp;(d=c),d&amp;&amp;&quot;string&quot;==typeof d&amp;&amp;(e=_.filter(d,e)),this.length&gt;1&amp;&amp;(mb[a]||_.unique(e),lb.test(a)&amp;&amp;e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a=&quot;string&quot;==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&amp;&amp;[],k=function(f){for(b=a.memory&amp;&amp;f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&amp;&amp;g&gt;h;h++)if(i[h].apply(f[0],f[1])===!1&amp;&amp;a.stopOnFalse){b=!1;break}d=!1,i&amp;&amp;(j?j.length&amp;&amp;k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);&quot;function&quot;===d?a.unique&amp;&amp;l.has(c)||i.push(c):c&amp;&amp;c.length&amp;&amp;&quot;string&quot;!==d&amp;&amp;f(c)})}(arguments),d?g=i.length:b&amp;&amp;(e=c,k(b))}return this},remove:function(){return i&amp;&amp;_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))&gt;-1;)i.splice(c,1),d&amp;&amp;(g&gt;=c&amp;&amp;g--,h&gt;=c&amp;&amp;h--)}),this},has:function(a){return a?_.inArray(a,i)&gt;-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&amp;&amp;!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[[&quot;resolve&quot;,&quot;done&quot;,_.Callbacks(&quot;once memory&quot;),&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,_.Callbacks(&quot;once memory&quot;),&quot;rejected&quot;],[&quot;notify&quot;,&quot;progress&quot;,_.Callbacks(&quot;memory&quot;)]],c=&quot;pending&quot;,d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&amp;&amp;a[b];e[f[1]](function(){var a=g&amp;&amp;g.apply(this,arguments);a&amp;&amp;_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+&quot;With&quot;](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&amp;&amp;g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+&quot;With&quot;](this===e?d:this,arguments),this},e[f[0]+&quot;With&quot;]=g.fireWith}),d.promise(e),a&amp;&amp;a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&amp;&amp;_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length&gt;1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g&gt;1)for(b=new Array(g),c=new Array(g),d=new Array(g);g&gt;e;e++)f[e]&amp;&amp;_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&amp;&amp;--_.readyWait&gt;0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&amp;&amp;(_(Z).triggerHandler(&quot;ready&quot;),_(Z).off(&quot;ready&quot;))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),&quot;complete&quot;===Z.readyState?setTimeout(_.ready):(Z.addEventListener(&quot;DOMContentLoaded&quot;,g,!1),a.addEventListener(&quot;load&quot;,g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if(&quot;object&quot;===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&amp;&amp;(e=!0,_.isFunction(d)||(g=!0),j&amp;&amp;(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i&gt;h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if(&quot;string&quot;==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&amp;&amp;&quot;string&quot;==typeof b&amp;&amp;void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&amp;&amp;delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&amp;&amp;f.attributes;if(void 0===a){if(this.length&amp;&amp;(e=sb.get(f),1===f.nodeType&amp;&amp;!rb.get(f,&quot;hasDataAttrs&quot;))){for(c=g.length;c--;)g[c]&amp;&amp;(d=g[c].name,0===d.indexOf(&quot;data-&quot;)&amp;&amp;(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,&quot;hasDataAttrs&quot;,!0)}return e}return&quot;object&quot;==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&amp;&amp;void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf(&quot;-&quot;)&amp;&amp;void 0!==c&amp;&amp;sb.set(this,a,b)})},null,b,arguments.length&gt;1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||&quot;fx&quot;)+&quot;queue&quot;,d=rb.get(a,b),c&amp;&amp;(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||&quot;fx&quot;;var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};&quot;inprogress&quot;===e&amp;&amp;(e=c.shift(),d--),e&amp;&amp;(&quot;fx&quot;===b&amp;&amp;c.unshift(&quot;inprogress&quot;),delete f.stop,e.call(a,g,f)),!d&amp;&amp;f&amp;&amp;f.empty.fire()},_queueHooks:function(a,b){var c=b+&quot;queueHooks&quot;;return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks(&quot;once memory&quot;).add(function(){rb.remove(a,[b+&quot;queue&quot;,c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return&quot;string&quot;!=typeof a&amp;&amp;(b=a,a=&quot;fx&quot;,c--),arguments.length&lt;c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),&quot;fx&quot;===a&amp;&amp;&quot;inprogress&quot;!==c[0]&amp;&amp;_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for(&quot;string&quot;!=typeof a&amp;&amp;(b=a,a=void 0),a=a||&quot;fx&quot;;g--;)c=rb.get(f[g],a+&quot;queueHooks&quot;),c&amp;&amp;c.empty&amp;&amp;(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],xb=function(a,b){return a=b||a,&quot;none&quot;===_.css(a,&quot;display&quot;)||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement(&quot;div&quot;)),c=Z.createElement(&quot;input&quot;);c.setAttribute(&quot;type&quot;,&quot;radio&quot;),c.setAttribute(&quot;checked&quot;,&quot;checked&quot;),c.setAttribute(&quot;name&quot;,&quot;t&quot;),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML=&quot;&lt;textarea&gt;x&lt;/textarea&gt;&quot;,Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb=&quot;undefined&quot;;Y.focusinBubbles=&quot;onfocusin&quot;in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&amp;&amp;(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&amp;&amp;_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||&quot;&quot;).match(nb)||[&quot;&quot;],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||&quot;&quot;).split(&quot;.&quot;).sort(),n&amp;&amp;(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&amp;&amp;_.expr.match.needsContext.test(e),namespace:o.join(&quot;.&quot;)},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&amp;&amp;l.setup.call(a,d,o,g)!==!1||a.addEventListener&amp;&amp;a.addEventListener(n,g,!1)),l.add&amp;&amp;(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&amp;&amp;rb.get(a);if(q&amp;&amp;(i=q.events)){for(b=(b||&quot;&quot;).match(nb)||[&quot;&quot;],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||&quot;&quot;).split(&quot;.&quot;).sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&amp;&amp;new RegExp(&quot;(^|\\.)&quot;+o.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;),g=f=m.length;f--;)k=m[f],!e&amp;&amp;p!==k.origType||c&amp;&amp;c.guid!==k.guid||h&amp;&amp;!h.test(k.namespace)||d&amp;&amp;d!==k.selector&amp;&amp;(&quot;**&quot;!==d||!k.selector)||(m.splice(f,1),k.selector&amp;&amp;m.delegateCount--,l.remove&amp;&amp;l.remove.call(a,k));g&amp;&amp;!m.length&amp;&amp;(l.teardown&amp;&amp;l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&amp;&amp;(delete q.handle,rb.remove(a,&quot;events&quot;))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,&quot;type&quot;)?b.type:b,o=X.call(b,&quot;namespace&quot;)?b.namespace.split(&quot;.&quot;):[];if(g=h=d=d||Z,3!==d.nodeType&amp;&amp;8!==d.nodeType&amp;&amp;!Cb.test(n+_.event.triggered)&amp;&amp;(n.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(o=n.split(&quot;.&quot;),n=o.shift(),o.sort()),j=n.indexOf(&quot;:&quot;)&lt;0&amp;&amp;&quot;on&quot;+n,b=b[_.expando]?b:new _.Event(n,&quot;object&quot;==typeof b&amp;&amp;b),b.isTrigger=e?2:3,b.namespace=o.join(&quot;.&quot;),b.namespace_re=b.namespace?new RegExp(&quot;(^|\\.)&quot;+o.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&amp;&amp;!l.noBubble&amp;&amp;!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">h===(d.ownerDocument||Z)&amp;&amp;m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&amp;&amp;!b.isPropagationStopped();)b.type=f&gt;1?i:l.bindType||n,k=(rb.get(g,&quot;events&quot;)||{})[b.type]&amp;&amp;rb.get(g,&quot;handle&quot;),k&amp;&amp;k.apply(g,c),k=j&amp;&amp;g[j],k&amp;&amp;k.apply&amp;&amp;_.acceptData(g)&amp;&amp;(b.result=k.apply(g,c),b.result===!1&amp;&amp;b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&amp;&amp;l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&amp;&amp;_.isFunction(d[n])&amp;&amp;!_.isWindow(d)&amp;&amp;(h=d[j],h&amp;&amp;(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&amp;&amp;(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,&quot;events&quot;)||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&amp;&amp;!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&amp;&amp;!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&amp;&amp;(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&amp;&amp;(a.result=d)===!1&amp;&amp;(a.preventDefault(),a.stopPropagation()));return j.postDispatch&amp;&amp;j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&amp;&amp;i.nodeType&amp;&amp;(!a.button||&quot;click&quot;!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||&quot;click&quot;!==a.type){for(d=[],c=0;h&gt;c;c++)f=b[c],e=f.selector+&quot; &quot;,void 0===d[e]&amp;&amp;(d[e]=f.needsContext?_(e,this).index(i)&gt;=0:_.find(e,this,null,[i]).length),d[e]&amp;&amp;d.push(f);d.length&amp;&amp;g.push({elem:i,handlers:d})}return h&lt;b.length&amp;&amp;g.push({elem:this,handlers:b.slice(h)}),g},props:&quot;altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(a,b){return null==a.which&amp;&amp;(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:&quot;button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&amp;&amp;null!=b.clientX&amp;&amp;(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&amp;&amp;d.scrollLeft||e&amp;&amp;e.scrollLeft||0)-(d&amp;&amp;d.clientLeft||e&amp;&amp;e.clientLeft||0),a.pageY=b.clientY+(d&amp;&amp;d.scrollTop||e&amp;&amp;e.scrollTop||0)-(d&amp;&amp;d.clientTop||e&amp;&amp;e.clientTop||0)),a.which||void 0===f||(a.which=1&amp;f?1:2&amp;f?3:4&amp;f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&amp;&amp;(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&amp;&amp;this.focus?(this.focus(),!1):void 0},delegateType:&quot;focusin&quot;},blur:{trigger:function(){return this===l()&amp;&amp;this.blur?(this.blur(),!1):void 0},delegateType:&quot;focusout&quot;},click:{trigger:function(){return&quot;checkbox&quot;===this.type&amp;&amp;this.click&amp;&amp;_.nodeName(this,&quot;input&quot;)?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,&quot;a&quot;)}},beforeunload:{postDispatch:function(a){void 0!==a.result&amp;&amp;a.originalEvent&amp;&amp;(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&amp;&amp;c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&amp;&amp;a.returnValue===!1?j:k):this.type=a,b&amp;&amp;_.extend(this,b),this.timeStamp=a&amp;&amp;a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&amp;&amp;a.preventDefault&amp;&amp;a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&amp;&amp;a.stopPropagation&amp;&amp;a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&amp;&amp;a.stopImmediatePropagation&amp;&amp;a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;,pointerenter:&quot;pointerover&quot;,pointerleave:&quot;pointerout&quot;},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&amp;&amp;!_.contains(d,e))&amp;&amp;(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if(&quot;object&quot;==typeof a){&quot;string&quot;!=typeof b&amp;&amp;(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&amp;&amp;null==d?(d=b,c=b=void 0):null==d&amp;&amp;(&quot;string&quot;==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&amp;&amp;(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&amp;&amp;a.preventDefault&amp;&amp;a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+&quot;.&quot;+d.namespace:d.origType,d.selector,d.handler),this;if(&quot;object&quot;==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||&quot;function&quot;==typeof b)&amp;&amp;(c=b,b=void 0),c===!1&amp;&amp;(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,Fb=/&lt;([\w:]+)/,Gb=/&lt;|&amp;#?\w+;/,Hb=/&lt;(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g,Mb={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&amp;&amp;11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e&gt;d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e&gt;d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,&quot;script&quot;),g.length&gt;0&amp;&amp;p(g,!i&amp;&amp;r(a,&quot;script&quot;)),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n&gt;m;m++)if(e=a[m],e||0===e)if(&quot;object&quot;===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement(&quot;div&quot;)),g=(Fb.exec(e)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;)+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=&quot;&quot;}else l.push(b.createTextNode(e));for(k.textContent=&quot;&quot;,m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&amp;&amp;(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),&quot;script&quot;),i&amp;&amp;p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||&quot;&quot;)&amp;&amp;c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&amp;&amp;(e=c[rb.expando],e&amp;&amp;(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&amp;&amp;delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&amp;&amp;(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&amp;&amp;this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&amp;&amp;this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&amp;&amp;(b&amp;&amp;_.contains(c.ownerDocument,c)&amp;&amp;p(r(c,&quot;script&quot;)),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&amp;&amp;(_.cleanData(r(a,!1)),a.textContent=&quot;&quot;);return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&amp;&amp;1===b.nodeType)return b.innerHTML;if(&quot;string&quot;==typeof a&amp;&amp;!Hb.test(a)&amp;&amp;!Mb[(Fb.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){a=a.replace(Eb,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(;d&gt;c;c++)b=this[c]||{},1===b.nodeType&amp;&amp;(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&amp;&amp;this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&amp;&amp;a.replaceChild(b,this)}),a&amp;&amp;(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j&gt;1&amp;&amp;&quot;string&quot;==typeof m&amp;&amp;!Y.checkClone&amp;&amp;Ib.test(m))return this.each(function(c){var d=k.eq(c);p&amp;&amp;(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&amp;&amp;(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&amp;&amp;(c=d),d)){for(e=_.map(r(c,&quot;script&quot;),n),f=e.length;j&gt;i;i++)g=c,i!==l&amp;&amp;(g=_.clone(g,!0,!0),f&amp;&amp;_.merge(e,r(g,&quot;script&quot;))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f&gt;i;i++)g=e[i],Jb.test(g.type||&quot;&quot;)&amp;&amp;!rb.access(g,&quot;globalEval&quot;)&amp;&amp;_.contains(h,g)&amp;&amp;(g.src?_._evalUrl&amp;&amp;_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,&quot;&quot;)))}return this}}),_.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f&gt;=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp(&quot;^(&quot;+vb+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText=&quot;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute&quot;,g.innerHTML=&quot;&quot;,e.appendChild(f);var b=a.getComputedStyle(g,null);c=&quot;1%&quot;!==b.top,d=&quot;4px&quot;===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement(&quot;div&quot;),g=Z.createElement(&quot;div&quot;);g.style&amp;&amp;(g.style.backgroundClip=&quot;content-box&quot;,g.cloneNode(!0).style.backgroundClip=&quot;&quot;,Y.clearCloneStyle=&quot;content-box&quot;===g.style.backgroundClip,f.style.cssText=&quot;border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute&quot;,f.appendChild(g),a.getComputedStyle&amp;&amp;_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&amp;&amp;b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement(&quot;div&quot;));return c.style.cssText=g.style.cssText=&quot;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0&quot;,c.style.marginRight=c.style.width=&quot;0&quot;,g.style.width=&quot;1px&quot;,e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp(&quot;^(&quot;+vb+&quot;)(.*)$&quot;,&quot;i&quot;),Ub=new RegExp(&quot;^([+-])=(&quot;+vb+&quot;)&quot;,&quot;i&quot;),Vb={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},Wb={letterSpacing:&quot;0&quot;,fontWeight:&quot;400&quot;},Xb=[&quot;Webkit&quot;,&quot;O&quot;,&quot;Moz&quot;,&quot;ms&quot;];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,&quot;opacity&quot;);return&quot;&quot;===c?&quot;1&quot;:c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:&quot;cssFloat&quot;},style:function(a,b,c,d){if(a&amp;&amp;3!==a.nodeType&amp;&amp;8!==a.nodeType&amp;&amp;a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&amp;&amp;&quot;get&quot;in g&amp;&amp;void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,&quot;string&quot;===f&amp;&amp;(e=Ub.exec(c))&amp;&amp;(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f=&quot;number&quot;),null!=c&amp;&amp;c===c&amp;&amp;(&quot;number&quot;!==f||_.cssNumber[h]||(c+=&quot;px&quot;),Y.clearCloneStyle||&quot;&quot;!==c||0!==b.indexOf(&quot;background&quot;)||(i[b]=&quot;inherit&quot;),g&amp;&amp;&quot;set&quot;in g&amp;&amp;void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&amp;&amp;&quot;get&quot;in g&amp;&amp;(e=g.get(a,!0,c)),void 0===e&amp;&amp;(e=v(a,b,d)),&quot;normal&quot;===e&amp;&amp;b in Wb&amp;&amp;(e=Wb[b]),&quot;&quot;===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each([&quot;height&quot;,&quot;width&quot;],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,&quot;display&quot;))&amp;&amp;0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&amp;&amp;Rb(a);return y(a,c,d?z(a,b,d,&quot;border-box&quot;===_.css(a,&quot;boxSizing&quot;,!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:&quot;inline-block&quot;},v,[a,&quot;marginRight&quot;]):void 0}),_.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f=&quot;string&quot;==typeof c?c.split(&quot; &quot;):[c];4&gt;d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e&gt;g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length&gt;1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return&quot;boolean&quot;==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||&quot;swing&quot;,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?&quot;&quot;:&quot;px&quot;)},cur:function(){var a=C.propHooks[this.prop];return a&amp;&amp;a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),c&amp;&amp;c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&amp;&amp;null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,&quot;&quot;),b&amp;&amp;&quot;auto&quot;!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&amp;&amp;(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&amp;&amp;a.elem.parentNode&amp;&amp;(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp(&quot;^(?:([+-])=|)(&quot;+vb+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),ac=/queueHooks$/,bc=[G],cc={&quot;*&quot;:[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&amp;&amp;e[3]||(_.cssNumber[a]?&quot;&quot;:&quot;px&quot;),g=(_.cssNumber[a]||&quot;px&quot;!==f&amp;&amp;+d)&amp;&amp;_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&amp;&amp;g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||&quot;.5&quot;,g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&amp;&amp;1!==h&amp;&amp;--i)}return e&amp;&amp;(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=[&quot;*&quot;]):a=a.split(&quot; &quot;);for(var c,d=0,e=a.length;e&gt;d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&amp;&amp;&quot;object&quot;==typeof a?_.extend({},a):{complete:c||!c&amp;&amp;b||_.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!_.isFunction(b)&amp;&amp;b};return d.duration=_.fx.off?0:&quot;number&quot;==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&amp;&amp;(d.queue=&quot;fx&quot;),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&amp;&amp;d.old.call(this),d.queue&amp;&amp;_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,&quot;finish&quot;))&amp;&amp;b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return&quot;string&quot;!=typeof a&amp;&amp;(c=b,b=a,a=void 0),b&amp;&amp;a!==!1&amp;&amp;this.queue(a||&quot;fx&quot;,[]),this.each(function(){var b=!0,e=null!=a&amp;&amp;a+&quot;queueHooks&quot;,f=_.timers,g=rb.get(this);if(e)g[e]&amp;&amp;g[e].stop&amp;&amp;d(g[e]);else for(e in g)g[e]&amp;&amp;g[e].stop&amp;&amp;ac.test(e)&amp;&amp;d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&amp;&amp;f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&amp;&amp;_.dequeue(this,a)})},finish:function(a){return a!==!1&amp;&amp;(a=a||&quot;fx&quot;),this.each(function(){var b,c=rb.get(this),d=c[a+&quot;queue&quot;],e=c[a+&quot;queueHooks&quot;],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&amp;&amp;e.stop&amp;&amp;e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&amp;&amp;f[b].queue===a&amp;&amp;(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g&gt;b;b++)d[b]&amp;&amp;d[b].finish&amp;&amp;d[b].finish.call(this);delete c.finish})}}),_.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||&quot;boolean&quot;==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E(&quot;show&quot;),slideUp:E(&quot;hide&quot;),slideToggle:E(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Yb=_.now();b&lt;c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Yb=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Zb||(Zb=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Zb),Zb=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||&quot;fx&quot;,this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement(&quot;input&quot;),b=Z.createElement(&quot;select&quot;),c=b.appendChild(Z.createElement(&quot;option&quot;));a.type=&quot;checkbox&quot;,Y.checkOn=&quot;&quot;!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement(&quot;input&quot;),a.value=&quot;t&quot;,a.type=&quot;radio&quot;,Y.radioValue=&quot;t&quot;===a.value}();var dc,ec,fc=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qb(this,_.attr,a,b,arguments.length&gt;1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&amp;&amp;3!==f&amp;&amp;8!==f&amp;&amp;2!==f)return typeof a.getAttribute===zb?_.prop(a,b,c):(1===f&amp;&amp;_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?ec:dc)),void 0===c?d&amp;&amp;&quot;get&quot;in d&amp;&amp;null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&amp;&amp;&quot;set&quot;in d&amp;&amp;void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+&quot;&quot;),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&amp;&amp;b.match(nb);if(f&amp;&amp;1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&amp;&amp;(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&amp;&amp;&quot;radio&quot;===b&amp;&amp;_.nodeName(a,&quot;input&quot;)){var c=a.value;return a.setAttribute(&quot;type&quot;,b),c&amp;&amp;(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||_.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qb(this,_.prop,a,b,arguments.length&gt;1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&amp;&amp;3!==g&amp;&amp;8!==g&amp;&amp;2!==g)return f=1!==g||!_.isXMLDoc(a),f&amp;&amp;(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&amp;&amp;&quot;set&quot;in e&amp;&amp;void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&amp;&amp;&quot;get&quot;in e&amp;&amp;null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute(&quot;tabindex&quot;)||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&amp;&amp;b.parentNode&amp;&amp;b.parentNode.selectedIndex,null}}),_.each([&quot;tabIndex&quot;,&quot;readOnly&quot;,&quot;maxLength&quot;,&quot;cellSpacing&quot;,&quot;cellPadding&quot;,&quot;rowSpan&quot;,&quot;colSpan&quot;,&quot;useMap&quot;,&quot;frameBorder&quot;,&quot;contentEditable&quot;],function(){_.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=&quot;string&quot;==typeof a&amp;&amp;a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||&quot;&quot;).match(nb)||[];j&gt;i;i++)if(c=this[i],d=1===c.nodeType&amp;&amp;(c.className?(&quot; &quot;+c.className+&quot; &quot;).replace(hc,&quot; &quot;):&quot; &quot;)){for(f=0;e=b[f++];)d.indexOf(&quot; &quot;+e+&quot; &quot;)&lt;0&amp;&amp;(d+=e+&quot; &quot;);g=_.trim(d),c.className!==g&amp;&amp;(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||&quot;string&quot;==typeof a&amp;&amp;a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||&quot;&quot;).match(nb)||[];j&gt;i;i++)if(c=this[i],d=1===c.nodeType&amp;&amp;(c.className?(&quot; &quot;+c.className+&quot; &quot;).replace(hc,&quot; &quot;):&quot;&quot;)){for(f=0;e=b[f++];)for(;d.indexOf(&quot; &quot;+e+&quot; &quot;)&gt;=0;)d=d.replace(&quot; &quot;+e+&quot; &quot;,&quot; &quot;);g=a?_.trim(d):&quot;&quot;,c.className!==g&amp;&amp;(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return&quot;boolean&quot;==typeof b&amp;&amp;&quot;string&quot;===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if(&quot;string&quot;===c)for(var b,d=0,e=_(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||&quot;boolean&quot;===c)&amp;&amp;(this.className&amp;&amp;rb.set(this,&quot;__className__&quot;,this.className),this.className=this.className||a===!1?&quot;&quot;:rb.get(this,&quot;__className__&quot;)||&quot;&quot;)})},hasClass:function(a){for(var b=&quot; &quot;+a+&quot; &quot;,c=0,d=this.length;d&gt;c;c++)if(1===this[c].nodeType&amp;&amp;(&quot; &quot;+this[c].className+&quot; &quot;).replace(hc,&quot; &quot;).indexOf(b)&gt;=0)return!0;return!1}});var ic=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&amp;&amp;(e=d?a.call(this,c,_(this).val()):a,null==e?e=&quot;&quot;:&quot;number&quot;==typeof e?e+=&quot;&quot;:_.isArray(e)&amp;&amp;(e=_.map(e,function(a){return null==a?&quot;&quot;:a+&quot;&quot;})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&amp;&amp;&quot;set&quot;in b&amp;&amp;void 0!==b.set(this,e,&quot;value&quot;)||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&amp;&amp;&quot;get&quot;in b&amp;&amp;void 0!==(c=b.get(e,&quot;value&quot;))?c:(c=e.value,&quot;string&quot;==typeof c?c.replace(ic,&quot;&quot;):null==c?&quot;&quot;:c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,&quot;value&quot;);return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f=&quot;select-one&quot;===a.type||0&gt;e,g=f?null:[],h=f?e+1:d.length,i=0&gt;e?h:f?e:0;h&gt;i;i++)if(c=d[i],!(!c.selected&amp;&amp;i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute(&quot;disabled&quot;))||c.parentNode.disabled&amp;&amp;_.nodeName(c.parentNode,&quot;optgroup&quot;))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)&gt;=0)&amp;&amp;(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)&gt;=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute(&quot;value&quot;)?&quot;on&quot;:a.value})}),_.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(a,b){_.fn[b]=function(a,c){return arguments.length&gt;0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,&quot;**&quot;):this.off(b,a||&quot;**&quot;,c)}});var jc=_.now(),kc=/\?/;_.parseJSON=function(a){return JSON.parse(a+&quot;&quot;)},_.parseXML=function(a){var b,c;if(!a||&quot;string&quot;!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,&quot;text/xml&quot;)}catch(d){b=void 0}return(!b||b.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;_.error(&quot;Invalid XML: &quot;+a),b};var lc,mc,nc=/#.*$/,oc=/([?&amp;])_=[^&amp;]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc=&quot;*/&quot;.concat(&quot;*&quot;);try{mc=location.href}catch(xc){mc=Z.createElement(&quot;a&quot;),mc.href=&quot;&quot;,mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:&quot;GET&quot;,isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,accepts:{&quot;*&quot;:wc,text:&quot;text/plain&quot;,html:&quot;text/html&quot;,xml:&quot;application/xml, text/xml&quot;,json:&quot;application/json, text/javascript&quot;},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;,json:&quot;responseJSON&quot;},converters:{&quot;* text&quot;:String,&quot;text html&quot;:!0,&quot;text json&quot;:_.parseJSON,&quot;text xml&quot;:_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&amp;&amp;(t=2,h&amp;&amp;clearTimeout(h),d=void 0,f=g||&quot;&quot;,v.readyState=a&gt;0?4:0,i=a&gt;=200&amp;&amp;300&gt;a||304===a,c&amp;&amp;(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&amp;&amp;(u=v.getResponseHeader(&quot;Last-Modified&quot;),u&amp;&amp;(_.lastModified[e]=u),u=v.getResponseHeader(&quot;etag&quot;),u&amp;&amp;(_.etag[e]=u)),204===a||&quot;HEAD&quot;===l.type?w=&quot;nocontent&quot;:304===a?w=&quot;notmodified&quot;:(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&amp;&amp;(w=&quot;error&quot;,0&gt;a&amp;&amp;(a=0))),v.status=a,v.statusText=(b||w)+&quot;&quot;,i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&amp;&amp;n.trigger(i?&quot;ajaxSuccess&quot;:&quot;ajaxError&quot;,[v,l,i?k:r]),p.fireWith(m,[v,w]),j&amp;&amp;(n.trigger(&quot;ajaxComplete&quot;,[v,l]),--_.active||_.event.trigger(&quot;ajaxStop&quot;)))}&quot;object&quot;==typeof a&amp;&amp;(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&amp;&amp;(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks(&quot;once memory&quot;),q=l.statusCode||{},r={},s={},t=0,u=&quot;canceled&quot;,v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2&gt;t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&amp;&amp;d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+&quot;&quot;).replace(nc,&quot;&quot;).replace(sc,lc[1]+&quot;//&quot;),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||&quot;*&quot;).toLowerCase().match(nb)||[&quot;&quot;],null==l.crossDomain&amp;&amp;(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&amp;&amp;i[2]===lc[2]&amp;&amp;(i[3]||(&quot;http:&quot;===i[1]?&quot;80&quot;:&quot;443&quot;))===(lc[3]||(&quot;http:&quot;===lc[1]?&quot;80&quot;:&quot;443&quot;)))),l.data&amp;&amp;l.processData&amp;&amp;&quot;string&quot;!=typeof l.data&amp;&amp;(l.data=_.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&amp;&amp;0===_.active++&amp;&amp;_.event.trigger(&quot;ajaxStart&quot;),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&amp;&amp;(e=l.url+=(kc.test(e)?&quot;&amp;&quot;:&quot;?&quot;)+l.data,delete l.data),l.cache===!1&amp;&amp;(l.url=oc.test(e)?e.replace(oc,&quot;$1_=&quot;+jc++):e+(kc.test(e)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+jc++)),l.ifModified&amp;&amp;(_.lastModified[e]&amp;&amp;v.setRequestHeader(&quot;If-Modified-Since&quot;,_.lastModified[e]),_.etag[e]&amp;&amp;v.setRequestHeader(&quot;If-None-Match&quot;,_.etag[e])),(l.data&amp;&amp;l.hasContent&amp;&amp;l.contentType!==!1||b.contentType)&amp;&amp;v.setRequestHeader(&quot;Content-Type&quot;,l.contentType),v.setRequestHeader(&quot;Accept&quot;,l.dataTypes[0]&amp;&amp;l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(&quot;*&quot;!==l.dataTypes[0]?&quot;, &quot;+wc+&quot;; q=0.01&quot;:&quot;&quot;):l.accepts[&quot;*&quot;]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&amp;&amp;(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u=&quot;abort&quot;;for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&amp;&amp;n.trigger(&quot;ajaxSend&quot;,[v,l]),l.async&amp;&amp;l.timeout&gt;0&amp;&amp;(h=setTimeout(function(){v.abort(&quot;timeout&quot;)},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2&gt;t))throw w;c(-1,w)}}else c(-1,&quot;No Transport&quot;);return v},getJSON:function(a,b,c){return _.get(a,b,c,&quot;json&quot;)},getScript:function(a,b){return _.get(a,void 0,b,&quot;script&quot;)}}),_.each([&quot;get&quot;,&quot;post&quot;],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&amp;&amp;(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_.each([&quot;ajaxStart&quot;,&quot;ajaxStop&quot;,&quot;ajaxComplete&quot;,&quot;ajaxError&quot;,&quot;ajaxSuccess&quot;,&quot;ajaxSend&quot;],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_._evalUrl=function(a){return _.ajax({url:a,type:&quot;GET&quot;,dataType:&quot;script&quot;,async:!1,global:!1,&quot;throws&quot;:!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&amp;&amp;(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,&quot;body&quot;)||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth&lt;=0&amp;&amp;a.offsetHeight&lt;=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?&quot;&quot;:b,d[d.length]=encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(b)};if(void 0===b&amp;&amp;(b=_.ajaxSettings&amp;&amp;_.ajaxSettings.traditional),_.isArray(a)||a.jquery&amp;&amp;!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">});else for(c in a)O(c,a[c],b,e);return d.join(&quot;&amp;&quot;).replace(yc,&quot;+&quot;)},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,&quot;elements&quot;);return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&amp;&amp;!_(this).is(&quot;:disabled&quot;)&amp;&amp;Cc.test(this.nodeName)&amp;&amp;!Bc.test(a)&amp;&amp;(this.checked||!yb.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(Ac,&quot;\r\n&quot;)}}):{name:b.name,value:c.replace(Ac,&quot;\r\n&quot;)}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=_.ajaxSettings.xhr();a.ActiveXObject&amp;&amp;_(a).on(&quot;unload&quot;,function(){for(var a in Ec)Ec[a]()}),Y.cors=!!Gc&amp;&amp;&quot;withCredentials&quot;in Gc,Y.ajax=Gc=!!Gc,_.ajaxTransport(function(a){var b;return Y.cors||Gc&amp;&amp;!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&amp;&amp;f.overrideMimeType&amp;&amp;f.overrideMimeType(a.mimeType),a.crossDomain||c[&quot;X-Requested-With&quot;]||(c[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&amp;&amp;(delete Ec[g],b=f.onload=f.onerror=null,&quot;abort&quot;===a?f.abort():&quot;error&quot;===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,&quot;string&quot;==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b(&quot;error&quot;),b=Ec[g]=b(&quot;abort&quot;);try{f.send(a.hasContent&amp;&amp;a.data||null)}catch(h){if(b)throw h}},abort:function(){b&amp;&amp;b()}}:void 0}),_.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/(?:java|ecma)script/},converters:{&quot;text script&quot;:function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter(&quot;script&quot;,function(a){void 0===a.cache&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&quot;GET&quot;)}),_.ajaxTransport(&quot;script&quot;,function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_(&quot;&lt;script&gt;&quot;).prop({async:!0,charset:a.scriptCharset,src:a.url}).on(&quot;load error&quot;,c=function(a){b.remove(),c=null,a&amp;&amp;e(&quot;error&quot;===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&amp;&amp;c()}}}});var Hc=[],Ic=/(=)\?(?=&amp;|$)|\?\?/;_.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var a=Hc.pop()||_.expando+&quot;_&quot;+jc++;return this[a]=!0,a}}),_.ajaxPrefilter(&quot;json jsonp&quot;,function(b,c,d){var e,f,g,h=b.jsonp!==!1&amp;&amp;(Ic.test(b.url)?&quot;url&quot;:&quot;string&quot;==typeof b.data&amp;&amp;!(b.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;Ic.test(b.data)&amp;&amp;&quot;data&quot;);return h||&quot;jsonp&quot;===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,&quot;$1&quot;+e):b.jsonp!==!1&amp;&amp;(b.url+=(kc.test(b.url)?&quot;&amp;&quot;:&quot;?&quot;)+b.jsonp+&quot;=&quot;+e),b.converters[&quot;script json&quot;]=function(){return g||_.error(e+&quot; was not called&quot;),g[0]},b.dataTypes[0]=&quot;json&quot;,f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&amp;&amp;(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&amp;&amp;_.isFunction(f)&amp;&amp;f(g[0]),g=f=void 0}),&quot;script&quot;):void 0}),_.parseHTML=function(a,b,c){if(!a||&quot;string&quot;!=typeof a)return null;&quot;boolean&quot;==typeof b&amp;&amp;(c=b,b=!1),b=b||Z;var d=gb.exec(a),e=!c&amp;&amp;[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&amp;&amp;e.length&amp;&amp;_(e).remove(),_.merge([],d.childNodes))};var Jc=_.fn.load;_.fn.load=function(a,b,c){if(&quot;string&quot;!=typeof a&amp;&amp;Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(&quot; &quot;);return h&gt;=0&amp;&amp;(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&amp;&amp;&quot;object&quot;==typeof b&amp;&amp;(e=&quot;POST&quot;),g.length&gt;0&amp;&amp;_.ajax({url:a,type:e,dataType:&quot;html&quot;,data:b}).done(function(a){f=arguments,g.html(d?_(&quot;&lt;div&gt;&quot;).append(_.parseHTML(a)).find(d):a)}).complete(c&amp;&amp;function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,&quot;position&quot;),l=_(a),m={};&quot;static&quot;===k&amp;&amp;(a.style.position=&quot;relative&quot;),h=l.offset(),f=_.css(a,&quot;top&quot;),i=_.css(a,&quot;left&quot;),j=(&quot;absolute&quot;===k||&quot;fixed&quot;===k)&amp;&amp;(f+i).indexOf(&quot;auto&quot;)&gt;-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&amp;&amp;(b=b.call(a,c,h)),null!=b.top&amp;&amp;(m.top=b.top-h.top+g),null!=b.left&amp;&amp;(m.left=b.left-h.left+e),&quot;using&quot;in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&amp;&amp;d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==zb&amp;&amp;(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return&quot;fixed&quot;===_.css(c,&quot;position&quot;)?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],&quot;html&quot;)||(d=a.offset()),d.top+=_.css(a[0],&quot;borderTopWidth&quot;,!0),d.left+=_.css(a[0],&quot;borderLeftWidth&quot;,!0)),{top:b.top-d.top-_.css(c,&quot;marginTop&quot;,!0),left:b.left-d.left-_.css(c,&quot;marginLeft&quot;,!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&amp;&amp;!_.nodeName(a,&quot;html&quot;)&amp;&amp;&quot;static&quot;===_.css(a,&quot;position&quot;);)a=a.offsetParent;return a||Kc})}}),_.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(b,c){var d=&quot;pageYOffset&quot;===c;_.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each([&quot;top&quot;,&quot;left&quot;],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?_(a).position()[b]+&quot;px&quot;:c):void 0})}),_.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(a,b){_.each({padding:&quot;inner&quot;+a,content:b,&quot;&quot;:&quot;outer&quot;+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&amp;&amp;(c||&quot;boolean&quot;!=typeof d),g=c||(d===!0||e===!0?&quot;margin&quot;:&quot;border&quot;);return qb(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement[&quot;client&quot;+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body[&quot;scroll&quot;+a],e[&quot;scroll&quot;+a],b.body[&quot;offset&quot;+a],e[&quot;offset&quot;+a],e[&quot;client&quot;+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define(&quot;jquery&quot;,[],function(){return _});var Lc=a.jQuery,Mc=a.$;return _.noConflict=function(b){return a.$===_&amp;&amp;(a.$=Mc),b&amp;&amp;a.jQuery===_&amp;&amp;(a.jQuery=Lc),_},typeof b===zb&amp;&amp;(a.jQuery=a.$=_),_});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07562s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-4bf9533935259bb898a8d60e1958f4d047968c430eae889800a187e279faf38f.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-610468c576a8b3b667000b4bbfa5193a1bb92a61109848f75e26b26ea6e0406f.js"></script>
      
      

  </body>
</html>

