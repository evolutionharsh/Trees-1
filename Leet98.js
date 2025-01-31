//Time Complexity : O(N)
//Space Complexity : O(H) where H is height of tree

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
 * @return {boolean}
 */
var isValidBST = function(root,min=null,max=null) {
     
        if(!root)
        {
            return true;
        }
        
        if(min && root.val<=min.val)
        {
          return false;
        }
        if(max && root.val>=max.val)
        {
            return false;
        }
        return isValidBST(root.left,min,root)&&isValidBST(root.right,root,max);
        
};