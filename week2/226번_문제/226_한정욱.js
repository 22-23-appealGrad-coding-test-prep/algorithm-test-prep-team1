/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    
    //idea 1
    //divide by 2 - 1
    //Use array index and calculate the tree
    
    // idea 2
    // sort the array and remake the tree with bigger going to leftside rather than right
    
    //use idea 2
    
    
    reverse(root);
    
    return root;  
};

const reverse = function(root){
    let temp;
    if( root === null){
        return;
    }
        temp = root.right;
        root.right = root.left;
        root.left = temp;
    reverse(root.left);
    reverse(root.right);
}