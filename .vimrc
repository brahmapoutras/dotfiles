set nocompatible " be iMproved, required
filetype off " required

call plug#begin() " plugin on GitHub repo
Plug 'tpope/vim-fugitive' 
Plug 'xuhdev/vim-latex-live-preview' " All of your Plugins must be added before the following line
Plug 'sakhnik/nvim-gdb', {'do' : ':!./install.sh \| UpdateRemotePlugins'} 
Plug 'autozimu/LanguageClient-neovim', { 'branch' : 'next', 'do' : 'bash install.sh'} 
" (Optional) Multi-entry selection UI.
" Plug 'roxma/nvim-yarp' " NOTE: you need to install completion sources to get completions. Check
" our wiki page for a list of sources: https://github.com/ncm2/ncm2/wiki
" Plug 'ncm2/ncm2' 
" Plug 'roxma/nvim-yarp'
" Plug 'ncm2/ncm2-bufword' 
" Plug 'ncm2/ncm2-path' 
" Plug 'ncm2/ncm2-jedi' 
" Plug 'ncm2/ncm2-pyclang' 
" Plug 'ncm2/ncm2-clang'
 "Plug 'ilyachur/cmake4vim'
Plug 'preservim/nerdtree' 
Plug 'junegunn/fzf', { 'do' : { ->fzf#install() } }
Plug 'junegunn/fzf.vim' 
Plug 'rhysd/vim-clang-format' 
Plug 'neoclide/coc.nvim', {'branch': 'master', 'do': { -> coc#util#install()}}
Plug 'vim-airline/vim-airline' 
Plug 'vim-airline/vim-airline-themes'
Plug 'inkarkat/vim-ReplaceWithRegister' 
call plug#end() " required

" enable ncm2 for all buffers
" autocmd BufEnter *call ncm2 #enable_for_buffer() " IMPORTANT: :help Ncm2PopupOpen for more information
" set completeopt=noinsert,menuone,noselect

" supress the annoying 'match x of y', 'The only match' and 'Patter not found'
" messages
" set shortmess+=c

" CTRL-C doesn't trigger the InsertLeave autocmd . map to <ESC> instead.
"inoremap <c-c> <ESC>

" When the <Enter> key is pressed while the popup menu is visible, it only
" hides the menu. Use this mapping to close the menu and also start a new line
" inoremap <expr> <CR> (pumvisible() ? "\<c - y>\<cr> " : "\<CR> ")

" use <TAB> to select the popup menu:
" inoremap <expr> <Tab> pumvisible() ? "\<C - n> " : "\<Tab> "
" inoremap <expr> <S-Tab> pumvisible() ? "\<C - p> " : "\< S - Tab> "
" call ncm2#override_source('LanguageClient_cpp', {'enable': 0})
" All system-wide defaults are set in $VIMRUNTIME/debian.vim and sourced by
" the call to :runtime you can find below.  If you wish to change any of those
" settings, you should do it in this file (/etc/vim/vimrc), since debian.vim
" will be overwritten everytime an upgrade of the vim packages is performed.
" It is recommended to make changes after sourcing debian.vim since it alters
" the value of the 'compatible' option.

" This line should not be removed as it ensures that various options are
" properly set to work with the Vim-related packages available in Debian.
runtime !debian.vim

" Vim will load $VIMRUNTIME/defaults.vim if the user does not have a vimrc.
" This happens after /etc/vim/vimrc(.local) are loaded, so it will override
" any settings in these files.
" If you don't want that to happen, uncomment the below line to prevent
" defaults.vim from being loaded.
" let g:skip_defaults_vim = 1

" Uncomment the next line to make Vim more Vi-compatible
" NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
" options, so any other options should be set AFTER setting 'compatible'.
"set compatible
set nocompatible

" Vim5 and later versions support syntax highlighting. Uncommenting the next
" line enables syntax highlighting by default.
if has("syntax") 
    syntax on 
endif

" If using a dark background within the editing area and syntax highlighting
" turn on this option as well
" set background=dark
" set highlight Normal ctermfg=blue ctermbg=gray
" set highlight Normal ctermfg=grey ctermbg=black

" Uncomment the following to have Vim jump to the last position when
" reopening a file
au BufReadPost * if line ("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

" Uncomment the following to have Vim load indentation rules and plugins
" according to the detected filetype.
filetype plugin indent on 
filetype plugin on

" The following are commented out as they cause vim to behave a lot
" differently from regular Vi. They are highly recommended though.
set showcmd " Show (partial) command in status line.
set showmatch " Show matching brackets.
set ignorecase " Do case insensitive matching
set smartcase " Do smart case matching
set incsearch " Incremental search
set autowrite " Automatically save before commands like :next and :make
set hidden " Hide buffers when they are abandoned
set mouse=a " Enable mouse usage (all modes)
set shiftwidth=4 tabstop=4 softtabstop=4 expandtab autoindent smartindent
set colorcolumn=150
set textwidth=149
set wrapmargin=1
set path=.,**
set noswapfile
set wildignore=*.o,*.so,*.obj
"
" au BufRead,BufNewFile *.cpp,*.h,*.c,*.hpp setlocal textwidth=80

"" coc.vim settings 
 
" " Some servers have issues with backup files, see #649.
set nobackup
set nowritebackup
" 
" " Give more space for displaying messages.
set cmdheight=2
" 
" " Having longer updatetime (default is 4000 ms = 4 s) leads to noticeable
" " delays and poor user experience.
set updatetime=1000
" 
" " Don't pass messages to |ins-completion-menu|.
set shortmess+=c
" 
" Always show the signcolumn, otherwise it would shift the text each time
" diagnostics appear/become resolved.
if has("patch-8.1.1564")
  " Recently vim can merge signcolumn and number column into one
  set signcolumn=number
else
  set signcolumn=yes
endif
"
" " Use tab for trigger completion with characters ahead and navigate.
" " NOTE: Use command ':verbose imap <tab>' to make sure tab is not mapped by
" " other plugin before putting this into your config.
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use <c-space> to trigger completion.
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif

" Use <cr> to confirm completion, `<C-g>u` means break undo chain at current
" position. Coc only does snippet and additional edit on confirm.
" <cr> could be remapped by other vim plugin, try `:verbose imap <CR>`.
if exists('*complete_info')
  inoremap <expr> <cr> complete_info()["selected"] != "-1" ? "\<C-y>" : "\<C-g>u\<CR>"
else
  inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
endif

" Use `[g` and `]g` to navigate diagnostics
" Use `:CocDiagnostics` to get all diagnostics of current buffer in location list.
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Use K to show documentation in preview window.
nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  else
    call CocActionAsync('doHover')
  endif
endfunction

" Highlight the symbol and its references when holding the cursor.
autocmd CursorHold * silent call CocActionAsync('highlight')

" Symbol renaming.
nmap <leader>rn <Plug>(coc-rename)

" Formatting selected code.
xmap <leader>f  <Plug>(coc-format-selected)
nmap <leader>f  <Plug>(coc-format-selected)

augroup mygroup
  autocmd!
  " Setup formatexpr specified filetype(s).
  autocmd FileType typescript,json setl formatexpr=CocAction('formatSelected')
  " Update signature help on jump placeholder.
  autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
augroup end

" Applying codeAction to the selected region.
" Example: `<leader>aap` for current paragraph
xmap <leader>a  <Plug>(coc-codeaction-selected)
nmap <leader>a  <Plug>(coc-codeaction-selected)

" Remap keys for applying codeAction to the current buffer.
nmap <leader>ac  <Plug>(coc-codeaction)
" Apply AutoFix to problem on the current line.
nmap <leader>qf  <Plug>(coc-fix-current)

" Map function and class text objects
" NOTE: Requires 'textDocument.documentSymbol' support from the language server.
xmap if <Plug>(coc-funcobj-i)
omap if <Plug>(coc-funcobj-i)
xmap af <Plug>(coc-funcobj-a)
omap af <Plug>(coc-funcobj-a)
xmap ic <Plug>(coc-classobj-i)
omap ic <Plug>(coc-classobj-i)
xmap ac <Plug>(coc-classobj-a)
omap ac <Plug>(coc-classobj-a)

" Use CTRL-S for selections ranges.
" Requires 'textDocument/selectionRange' support of language server.
nmap <silent> <C-s> <Plug>(coc-range-select)
xmap <silent> <C-s> <Plug>(coc-range-select)

" Add `:Format` command to format current buffer.
command! -nargs=0 Format :call CocAction('format')

" Add `:Fold` command to fold current buffer.
command! -nargs=? Fold :call     CocAcion('fold', <f-args>)

" Add `:OR` command for organize imports of the current buffer.
command! -nargs=0 OR   :call     CocAction('runCommand', 'editor.action.organizeImport')

" Add (Neo)Vim's native statusline support.
" NOTE: Please see `:h coc-status` for integrations with external plugins that
" provide custom statusline: lightline.vim, vim-airline.
set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}

" Mappings for CoCList
" Show all diagnostics.
nnoremap <silent><nowait> <space>a  :<C-u>CocList diagnostics<cr>
" Manage extensions.
nnoremap <silent><nowait> <space>e  :<C-u>CocList extensions<cr>
" Show commands.
nnoremap <silent><nowait> <space>c  :<C-u>CocList commands<cr>
" Find symbol of current document.
nnoremap <silent><nowait> <space>o  :<C-u>CocList outline<cr>
" Search workspace symbols.
nnoremap <silent><nowait> <space>s  :<C-u>CocList -I symbols<cr>
" Do default action for next item.
nnoremap <silent><nowait> <space>j  :<C-u>CocNext<CR>
" Do default action for previous item.
nnoremap <silent><nowait> <space>k  :<C-u>CocPrev<CR>
" Resume latest coc list.
nnoremap <silent><nowait> <space>p  :<C-u>CocListResume<CR>t
" "" coc.vim settings end
"
" LanguageClient setttings 
let g:LanguageClient_serverCommands = {
    \ 'rust': ['~/.cargo/bin/rustup', 'run', 'stable', 'rls'],
    \ 'javascript': ['/usr/local/bin/javascript-typescript-stdio'],
    \ 'javascript.jsx': ['tcp://127.0.0.1:2089'],
    \ 'python': ['/usr/local/bin/pyls'],
    \ 'ruby': ['~/.rbenv/shims/solargraph', 'stdio'],
    \ }

" note that if you are using Plug mapping you should not use `noremap` mappings.
nmap <silent> gm <Plug>(lcn-menu)
" Or map each action separately
nmap <silent> gh <Plug>(lcn-hover)
nmap <silent> gd <Plug>(lcn-definition)
nmap <silent> gn <Plug>(lcn-rename)

" Always draw sign column. Prevent buffer moving when adding/deleting sign.
set signcolumn=yes

let g:LanguageClient_loggingLevel = 'INFO'
let g:LanguageClient_diagnosticsList = "Disabled"
let g:LanguageClient_diagnosticsEnable = 0

" end of LanguageClient setttings
"
"" Source a global configuration file if available 
"if filereadable("/etc/vim/vimrc.local") 
"   source /etc/vim/vimrc.local
"endif
command! Reload execute "source ~/.vimrc" 
" inoremap jj <Esc> 
noremap <C-h> :tabp<CR> 
noremap <C-l> :tabn<CR> 
noremap ; :

set relativenumber
set number

"""
" FZF
"""
" let $FZF_DEFAULT_COMMAND = 'rg --files --hidden --glob "!.git/*"'
" nmap // :BLines!<CR>
nmap ?? :Rg!<CR>
nmap <C-s> :Files!<CR>
nmap cc :Commands!<CR>

"""
" Nerdtree
"""
let NERDTreeShowHidden=1

function! ToggleNERDTree()
    NERDTreeToggle
    " Set NERDTree instances to be mirrored
    silent NERDTreeMirror
endfunction

nmap <C-n> :call ToggleNERDTree()<CR>

let g:ycm_global_ycm_extra_conf="~/.vim/.ycm_extra_conf.py"


let leader = ","
let mapleader = ","

" ReplaceWithRegister commands
nmap <leader>r  <Plug>ReplaceWithRegisterOperator
nmap <leader>rr <Plug>ReplaceWithRegisterLine
xmap <leader>r  <Plug>ReplaceWithRegisterVisual
" ReplaceWithRegister end
" nvim-gdb start 
" We're going to define single-letter keymaps, so don't try to define them
" in the terminal window.  The debugger CLI should continue accepting text commands.
function! NvimGdbNoTKeymaps()
  tnoremap <silent> <buffer> <esc> <c-\><c-n>
endfunction

let g:nvimgdb_config_override = {
  \ 'key_next': 'n',
  \ 'key_step': 's',
  \ 'key_finish': 'f',
  \ 'key_continue': 'c',
  \ 'key_until': 'u',
  \ 'key_breakpoint': 'b',
  \ 'set_tkeymaps': "NvimGdbNoTKeymaps",
  \ }
" nvim-gdb end 


" -----------------------------------------------------------------------------
"  " clang-format
"  "
"  -----------------------------------------------------------------------------
" let g:clang_format#code_style="llvm"
" let g:clang_format#style_options={
"           \ "IndentWidth": 2,
"           \ "Standard": "Cpp11",
"           \ "AllowShortFunctionsOnASingleLine": "false",
"           \ "AlwaysBreakTemplateDeclarations": "true",
"           \ "AlignEscapedNewlinesLeft": "true",
"           \ "ColumnLimit": 149,
"           \ "SortIncludes": "false",
"           \  }
" " map to <leader>cf in C++ code
autocmd FileType c,cpp,objc nnoremap <buffer><leader>cf :<C-u>ClangFormat<CR>
autocmd FileType c,cpp,objc vnoremap <buffer><leader>cf :ClangFormat<CR>
" " if you install vim-operator-user
" " autocmd FileType c,cpp,objc map <buffer><leader>x <Plug>(operator-clang-format)
" " Toggle auto formatting:
" nmap <leader>C :ClangFormatAutoToggle<CR>

"" jump to the previous function
"nnoremap <silent> [[ :call
            "\ search('\(\(if\\|for\\|while\\|switch\\|catch\)\_s*\)\@64<!(\_[^)]*)\_[^;{}()]*\zs{',"bw")<CR>
set encoding=utf-8
" autocmd FileType h,hpp,c,cpp,objc nnoremap <buffer><leader>gl :YcmCompleter GoToDeclaration<CR>
" autocmd FileType h,hpp,c,cpp,objc nnoremap <buffer><leader>gk :YcmCompleter GoToDefinition<CR>
colo default
let g:livepreview_previewer = 'zathura'
let g:python_host_prog = "/usr/bin/python3.7"
" let g:cmake_default_config = "Release"
let g:cmake_build_target = "Release"
let g:fzf_history_dir='~/.fzf_history'
