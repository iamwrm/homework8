var display_block = document.getElementById("display")

backup_alt = display_block.innerHTML
backup_clr = display_block.style.backgroundColor


function m_in() {
    var this_alt = $(this).attr("alt")
    var this_src = $(this).attr("src")
    display_block.innerHTML = this_alt
    // display_block.style.backgroundColor = 'transparent'
    display_block.style.backgroundImage = 'url(' + this_src + ')'
}

function m_out() {
    display_block.innerHTML = backup_alt
    display_block.style.backgroundColor = backup_clr
    display_block.style.backgroundImage = ""
}

$(".thumbnail").hover(m_in, m_out)