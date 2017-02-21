<?php
/*
 * Plugin Name: Copy Post to Clipboard
 * Version: 1.1
 * Plugin URI: http://garand.me
 * Description: Copy post content to clipboard.
 * Author: Anthony Garand
 * Author URI: http://garand.me
 * Requires at least: 4.0
 * Tested up to: 4.7.2
 *
 * @package WordPress
 * @author Anthony Garand
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_filter( 'the_content', 'cptc_content_filter', 20 );

/**
 * Add copy to clipboard button to the bottom of every post
 *
 * @uses is_single()
 */
function cptc_content_filter( $content ) {

	if ( is_single() ) {
		wp_enqueue_script( 'clipboard-js', plugin_dir_url( __FILE__ ) . 'node_modules/clipboard-js/clipboard.min.js' );
		wp_enqueue_script( 'copy-post-to-clipboard', plugin_dir_url( __FILE__ ) . 'copy-post-to-clipboard.js' );

		$content = '<div id="copyPostToClipboard__contentArea">' . $content . '</div>';
		$content .= '<button id="copyPostToClipboard__button">Copy to Clipboard</button>';
	}

	// Returns the content.
	return $content;
}
